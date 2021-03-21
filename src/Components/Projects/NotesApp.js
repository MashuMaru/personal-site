import React from 'react';
import MyNotesImg from '../Projects/images/my-notes-app.png';
import AOS from 'aos';
import ReactImg from '../Projects/images/Logos/react.png';
import HTMLImg from '../Projects/images/Logos/html.png';
import CSSImg from '../Projects/images/Logos/css.png';
import JavaScriptImg from '../Projects/images/Logos/javascript.png';

function NotesApp() {
    AOS.init()
    return <section id="projects" data-aos="fade-left" data-aos-duration="500">
    {/* <hr></hr> */}
        <div className="container-div">
            <div className='projects-section'>
                <div className="col about-information-left">
                    <h3 className="left-description">My Sticky Notes App Web Application</h3>
                    <img class="tech-logo" src={HTMLImg} alt="html-img"></img>
                    <img class="tech-logo" src={CSSImg} alt="css-img"></img>
                    <img class="tech-logo" src={JavaScriptImg} alt="js-img"></img>
                    <img class="tech-logo" src={ReactImg} alt="react-img"></img>
                    <p className="about-details">This is a web application I built to keep notes, 
                    add and delete as required. </p>
                    <p className="about-details">I built this to using React.JS to push my understanding and ability to work with the JavaScript library.</p> 
                    <p className="about-details">It was designed and developed by me.</p> 
                    <p className="about-details">I built the web application using:</p>
                    <p className="about-details"><li>HTML</li></p>
                    <p className="about-details"><li>CSS</li></p>
                    <p className="about-details"><li>Javascript</li></p>
                    <p className="about-details"><li>React.js</li></p>
                    <p className="port-link"><a rel="noreferrer" href="https://my-sticky-notes-app.netlify.app/" target="_blank">Click here to check it out!</a></p> 
                </div>
                <div className="col left-pic-section" data-aos="fade-right" data-aos-duration="1000">
                    <img className="skills-pic" src={MyNotesImg} alt="pic-of-me"></img>
                </div>
            </div>
        </div>
    </section>
}

export default NotesApp;