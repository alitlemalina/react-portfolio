import React from "react";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_RbQDV9bgjLSNEdC2Q4jym");

//disable email
function Contacts() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_9k6sg4i', e.target, 'user_RbQDV9bgjLSNEdC2Q4jym')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="container" >
            <h2 className="contacts" id="Contacts">CONTACTS</h2>
            <section className="sorry" pd-3>
            <p>✍ Sorry for disable contact form </p>
            <h4>Please, Contact Gmail: malinaderpink@gmail.com</h4>
            </section>

            <form onSubmit={sendEmail} >
                <div className="row pt-5 mx-auto" >
                <div className="col-10 from-group mx-auto">
                
                <input type="text" className="form-control" placeholder="Your name" name="user_name" disabled/>
                </div>

                <div className="col-10 from-group pt-3 mx-auto">
                
                <input type="email" className="form-control" placeholder="your@gmail.com" name="user_email" disabled/>
                
                </div>

                <div className="col-10 from-group pt-3 mx-auto">
                
                <input type="text" className="form-control" placeholder="Subject" name="user_subject" disabled/>
                
                </div>
                <div className="col-10 from-group pt-3 mx-auto">
                
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" disabled/>
                </div>
                <div className="col-10 pt-4 mx-auto">
                <input type="submit" className="btn btn-info" value="Send Message" disabled/>
                </div>
                </div>
            </form>
            
            <footer>Copyright © Malina Portfolio Page</footer>
            
        </div>

    );

}

export default Contacts;