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
        <p className="about-details">A personalised 'search engine' interface.</p>
        <p className="about-details">I came up with this simple idea to make a more personalised 
        landing page, from which you can type the topic you wish to search for, as if you were using Google.</p> 
        <p className="about-details">I built this to get more out of JavaScript and to see how I could create something that would 
        be a more personalised interface to the Google search engine. In future, I hope to expand on this project in future so it interfaces with the account users details, and is 
        even more customisable with changing the default background, widgets using API's etc.</p>
        <p className="about-details">I built the web application using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>JavaScript</li></p>
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