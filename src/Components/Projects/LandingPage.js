import React from 'react';
import LandingPage from '../Projects/images/mashu-landing-page.png';
import AOS from 'aos';

function ClockTask() {
    AOS.init()
    return <section id="projects" data-aos="fade-left" data-aos-duration="500">
    {/* <hr></hr> */}
    <div className="container-div">
    <div className='projects-section'>
        {/* <h1 className="title">Projects</h1> */}
        <div className="col about-information-left">
        <h3 className="left-description">Personalised Landing Page</h3>
        <p className="about-details">A personalised 'search' engine interface.</p>
        <p className="about-details">I came up with this simple idea to make a more personalised 
        landing page, from which you can type the topic you wish to search for, as if you were using Google.</p> 
        <p className="about-details">I built this to get more out of JavaScript and to see how I could create something that would 
        be a more personalised interface to the Google search engine. This of course, is just a test project.</p>
        <p className="about-details">I hope to expand on this project in future so it interfaces with the account users details, so it does
         not have to rely on local storage for the user name for the personalised greeting.</p>
        <p className="about-details">I built the web application using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>JavaScript</li></p>
        <p className="about-details">Background image was shot and is owned by me.</p>
        <p className="port-link"><a rel="noreferrer" href="https://mashu-landing-page.netlify.app/" target="_blank">Click here to check it out!</a></p>        {/* <p className="port-link"><a rel="noreferrer" href="https://daily-check-list.netlify.app/" target="_blank">Click here to check it out!</a></p> */}


        </div>

        <div className="col left-pic-section" data-aos="fade-right" data-aos-duration="1000">
        <img className="skills-pic landing-pic" src={LandingPage} alt="pic-of-me"></img>
        </div>
</div>
        </div>
    </section>
}

export default ClockTask;