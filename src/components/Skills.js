import React from "react";
import htmlLogo from "../html.png";
import cssLogo from "../css.png";
import jsLogo from "../js.png";
import xdLogo from "../xd.png";
function Skills() {
    return (
        <div className="skill-bg">
        <div className="container">
            <h2 className="skills" id="Skills">CORE SKILLS</h2>
            
                <div className="skill-img">
                    <img className="skill-image" src={htmlLogo}/>
                    <img className="skill-image" src={cssLogo}/>
                    <img className="skill-image" src={jsLogo}/>
                    <img className="skill-image" src={xdLogo}/>
                    <br/>
                    
                </div>
                
                <div className="skill-subtitle">
                <p><strong> Hypertext Markup Language revision 5 (HTML5)</strong> is markup language for the structure and presentation of World Wide Web contents.</p>
                    <p><strong>Cascading Style Sheets Level 3 (CSS3)</strong> is the iteration of the CSS standard used in the styling and formatting of Web pages.</p>
                    <p><strong>JavaScript (JS)</strong> is a programming language commonly used in Web development.</p>
                    <p><strong>Adobe XD</strong> is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc.</p>
                    </div>
            </div>
        </div>
    );
}
export default Skills;