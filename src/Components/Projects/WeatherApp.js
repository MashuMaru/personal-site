import React from 'react';
import WeatherApp from '../Projects/images/weather_app.jpeg';
import AOS from 'aos';

function ClockTask() {
    AOS.init()
    return <section id="projects" data-aos="fade-left" data-aos-duration="500">
    {/* <hr></hr> */}
    <div className="container-div">
    <div className='projects-section'>
        {/* <h1 className="title">Projects</h1> */}
        <div className="col about-information-left">
        <h3 className="left-description">Weather and Time Web App</h3>
        <p className="about-details">A simple weather and time web application.</p>
        <p className="about-details">Speaking with my Dad inpired me to build this. We always discuss how
        API's work, and I generally have an interest in all things backend!</p> 
        <p className="about-details">I found it very interesting to build as it revealed how a number of 
        API's retrieve data.</p>
        <p className="about-details">I built the web application using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>React.JS</li></p>
        <p className="about-details"><li>Node.JS</li></p>
        <p className="about-details"><li>Express.JS</li></p>
        <p className="caveat"><i>Not yet deployed. Work in progress. View here on my <a className="port-link" target="_blank" rel="noreferrer" href="https://github.com/MashuMaru/Weather-App">GitHub</a>.</i></p>
        {/* <p className="port-link"><a rel="noreferrer" href="https://daily-check-list.netlify.app/" target="_blank">Click here to check it out!</a></p> */}


        </div>

        <div className="col left-pic-section" data-aos="fade-right" data-aos-duration="1000">
        <img className="skills-pic" src={WeatherApp} alt="pic-of-me"></img>
        </div>
</div>
        </div>
    </section>
}

export default ClockTask;