import React from 'react';
import Mashumaru from '../mashumaru-1.jpg'

function About() {

    return <section id="about">
    <hr></hr>
    <div className='about-section'>
        <h1 className="title">About Me</h1>
    <div className="col about-pic-section">
        <img className="profile-pic" src={Mashumaru} alt="pic-of-me"></img>
        </div>


        <div className="col about-information">
        <h3 className="description">I am a self-taught website and web application developer.</h3>
        <p className="about-details">I am currently a Principle Electrical Design Engineer in a Building Services Consultancy, 
        I realised I wanted something different in my career, something more inline my interests.</p>
        <p className="about-details">I then started learning web development in 2019 using online courses and self-teaching in my own time. 
        Programming and coding has always been an interest of mine, so took this opportunity to push and learn.</p>
        <p className="about-details">Since then, I have built websites, webapplications and even a couple of web games.
        I love coffee (especially Starbucks Caramel Frappuccino), hiking and music. </p>
        <p className="about-details">My aim for the future is to work full time in Web Development and programming,
        and work with as many clients to bring their ideas into reality. </p>
        <h3 className="description">Current skillset:</h3>
        <p className="about-details">HTML, CSS, JavaScript, jQuery, Bootstrap, React.JS and Python.</p>
        </div>
        </div>
    </section>
}

export default About;