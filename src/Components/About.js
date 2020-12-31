import React from 'react';
import Mashumaru from '../mashumaru-1.jpg'

function About() {
    return <section id="about">
    <div className='about-section'>
    
    <hr></hr>
        <h1 className="about-title">About</h1>

        <img className="profile-pic" src={Mashumaru} alt="pic-of-me"></img>
        {/* <section id="about-description"></section> */}
        <h3 className="about-description">I am a self-taught website and web application developer.</h3>
        <p className="about-details">I started learning web development in 2019 using online courses and self-teaching in my own time. 
        Programming and coding has always been an interest of mine.</p>
        <p className="about-details">Since then, I have built websites, webapplications and even a couple of web games.
        I love coffee (especially Starbucks Caramel Frappuccino), hiking and music. </p>
        </div>
    </section>
}

export default About;