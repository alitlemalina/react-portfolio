import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import { Component } from 'react';


class App extends Component {
  render() {
    
    return (
      <>

        <Particles className="pariticles"
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#f9ab00",
                  blur: 5
                }
              }
            }
          }}

        />

        <NavBar />
        <Header />
        <AboutMe/>
        <Skills/>
        <Contacts/>
      </>
    );
  }

}

export default App;
