import React from 'react';
import MyNotesImg from '../Projects/images/my-notes-app.png';

function NotesApp() {

    return <section id="about">
    {/* <hr></hr> */}
    <div className='about-section'>
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


        </div>

        <div className="col left-pic-section">
        <img className="skills-pic" src={MyNotesImg} alt="pic-of-me"></img>
        </div>

        </div>
    </section>
}

export default NotesApp;