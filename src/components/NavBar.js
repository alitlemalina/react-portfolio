import React from "react";
import logo from "../logo.png";

//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
class NavBar extends React.Component {
  constructor(){
    super();
    this.state ={
      show : true,
      scrollPos: 0
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () =>{
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show:document.body.getBoundingClientRect().top > this.state.scrollPos
    })
  }
  
  render(){
    console.log(this.state);

    return (
      <nav className={this.state.show ? 'active' : 'hidden'} >
      <nav className="navbar home navbar-expand-lg navbar-light bg-dark">
      
        <div className="container" >
  
          <a className="navbar-brand" href="home"><img className="logo" src={logo} alt="logo..." /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutMe">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Skills">Core Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contacts">Contacts</a>
              </li>
            </ul>
          </div>
  
        </div>
  
      </nav>
      </nav>
    );
  }

}
export default NavBar;


