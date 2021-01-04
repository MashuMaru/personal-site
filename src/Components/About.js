import React from 'react';
import Mashumaru from '../Components/Projects/images/MBe.JPG'
import AOS from 'aos';

function About() {
    AOS.init()
    return  <section id="about">
    <hr></hr>

    <div className='section' data-aos="fade-right" data-aos-duration="1000">
        <h1 className="title">About Me</h1>
 <div className="container-div">
    <div className="col about-pic-section">
        <img className="profile-pic" src={Mashumaru} alt="pic-of-me"></img>
        </div>


        <div className="col about-information">
        <h3 className="description">I am a self-taught website and web application developer.</h3>
        {/* <p className="about-details">I am currently a Principle Electrical Design Engineer in a Building Services Consultancy, 
        I realised I wanted something different in my career, something more inline my interests.</p> */}
        <p className="about-details">I started learning web development in 2019 using online courses and self-teaching in my own time. 
        Programming and coding has always been an interest of mine, so took this opportunity to push and learn.</p>
        <p className="about-details">Since then, I have built websites, webapplications and even a couple of web games.
        I love coffee (especially Starbucks Caramel Frappuccino), hiking and music. </p>
        <p className="about-details">My aim for the future is to work full time in Web Development and programming,
        and work with as many clients to bring their ideas into reality. </p>
        <p className="about-details">I am continually building and learning to further enchance my skills. </p>
        <h3 className="description">Current skillset:</h3>
        <p className="about-details">HTML, CSS, JavaScript, jQuery, Bootstrap, React.JS and just started to learn Python.</p>
        </div>
        </div>
</div>
    </section>

}

export default About;