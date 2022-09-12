import profilePic from "./assets/senami.png";
import mail from "./assets/Mail.png";
import vector from "./assets/vector.png";

import "./App.css";
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <div className="picture">
        <img src={profilePic} className="profilepicture" alt="pic" />
      </div>
      <div className="main-info">
        <p className="fullName">Steph D-A</p>
        <p className="role">Frontend Developer</p>
        <p className="website">stephandoh.website</p>
        <button className="contact-email">
          <img src={mail} alt="pic" />
          <p>Email</p>
        </button>
        <button className="contact-linkedin">
          <img classname="contact-linkedin" src={vector}alt="pic" />
          <p className="text-linkedin">Linkedin</p>
        </button>
        <div className="details">
          <p className="about-title">About</p>
          <p className="about-content">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <p className="interest-title">Interests</p>
          <p className="interest-content">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
