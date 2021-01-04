import React from 'react';
import MyNotesImg from '../Projects/images/my-notes-app.png';
import AOS from 'aos';

function NotesApp() {
    AOS.init()
    return <section id="projects" data-aos="fade-right" data-aos-duration="2000">
    {/* <hr></hr> */}
    <div className="container-div">
    <div className='projects-section'>
        {/* <h1 className="title">Projects</h1> */}
        <div className="col about-information-left">
        <h3 className="left-description">My Sticky Notes App Web Application</h3>
        <p className="about-details">This is a web application I built to keep notes, 
        add and delete as required. </p>
        <p className="about-details">I built this to test my knowledge and practice my skills
        in Javascript making the site a fully functional web application.</p> 
        <p className="about-details">It was designed and developed by myself.</p> 
        <p className="about-details">I built the website using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>Javascript</li></p>
        <p className="about-details"><li>React.JS</li></p>
        <p className="caveat"><i>Not yet deployed. Work in progress.</i></p>


        </div>

        <div className="col left-pic-section">
        <img className="skills-pic" src={MyNotesImg} alt="pic-of-me"></img>
        </div>
</div>
        </div>
    </section>
}

export default NotesApp;