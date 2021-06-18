import React from "react";
import lina from "../lina.jpg";
function AboutMe() {
    
    return (
        <div className="container" >
            <h2 className="aboutme" id="AboutMe">ABOUT ME</h2>
            <div className="style1">
                <p className="style2" >Hello everyone, welcom to my portfolio. My name's Malina PHETXOMPHOTU. I am currently a senior student, studying Computer Engineering at the Faculty of Engineering, NOUL. 
                <br /> I am interested in Web development and design and I also love to follow technology circle.
                <br />If you have any specific questions, please contacts me, I will be glad to answer that.
                <br/><br/>
                <strong>Email: </strong>
                <p>malinaderpink@gmail.com</p>
                </p>
                
               
                <img className="style2 lina" src={lina} alt="lina..." />
                
        </div>
        </div>
    );
}
export default AboutMe;