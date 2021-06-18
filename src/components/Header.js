import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper" >
            <div className="main-info" >
                
                <h1>web developer and web designer</h1>
                <Typed className="typed-text"
                strings={["Web Designer", "Web Developer"]}
                typeSpeed={60}
                backSpeed={80}
                loop
                />
                <a href="#Contacts" className="btn-main-offer">contact me</a>
            </div>
        </div>
        
    );
}

export default Header;