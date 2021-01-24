import React from 'react';
import MyNotesImg from '../Projects/images/my-notes-app.png';
import AOS from 'aos';

function NotesApp() {
    AOS.init()
    return <section id="projects" data-aos="fade-left" data-aos-duration="500">
    {/* <hr></hr> */}
    <div className="container-div">
    <div className='projects-section'>
        {/* <h1 className="title">Projects</h1> */}
        <div className="col about-information-left">
        <h3 className="left-description">My Sticky Notes App Web Application</h3>
        <p className="about-details">This is a web application I built to keep notes, 
        add and delete as required. </p>
        <p className="about-details">I built this to test my knowledge and practice my skills
        in JavaScript/jQuery making the site a fully functional web application.</p> 
        <p className="about-details">It was designed and developed by me.</p> 
        <p className="about-details">I built the web application using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>Javascript</li></p>
        <p className="about-details"><li>React.JS</li></p>
        <p className="caveat"><i>Not yet deployed. Work in progress. Viewable on my <a className="port-link" target="_blank" rel="noreferrer" href="https://github.com/MashuMaru/my-notes-appv2">GitHub</a>.</i></p>


        </div>

        <div className="col left-pic-section" data-aos="fade-right" data-aos-duration="1000">
        <img className="skills-pic" src={MyNotesImg} alt="pic-of-me"></img>
        </div>
</div>
        </div>
    </section>
}

export default NotesApp;