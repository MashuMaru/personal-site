import React from 'react';
import ClockTaskImg from '../Projects/images/ClockTasks-img.png';
import AOS from 'aos';
import HTMLImg from '../Projects/images/Logos/html.png';
import CSSImg from '../Projects/images/Logos/css.png';
import JavaScriptImg from '../Projects/images/Logos/javascript.png';

function ClockTask() {
    AOS.init()
    return <section id="projects" data-aos="fade-left" data-aos-duration="500">
    {/* <hr></hr> */}
    <div className="container-div">
    <div className='projects-section'>
        {/* <h1 className="title">Projects</h1> */}
        <div className="col about-information-left">
        <h3 className="left-description">Clock and To Do List</h3>
        <img class="tech-logo" src={HTMLImg} alt="html-img"></img>
        <img class="tech-logo" src={CSSImg} alt="css-img"></img>
        <img class="tech-logo" src={JavaScriptImg} alt="js-img"></img>
        <p className="about-details">This project went from creating a simple clock, 
        to me expanding on it to make a to do list web application.</p>
        <p className="about-details">I built this as I would actually find it useful,
        and to push my JavaScript and jQuery knowledge even further.</p> 
        <p className="about-details">I actually do use it from time to time...</p>
        <p className="about-details">I built the web application using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>JavaScript, jQuery</li></p>
        <p className="port-link"><a rel="noreferrer" href="https://daily-check-list.netlify.app/" target="_blank">Click here to check it out!</a></p>


        </div>

        <div className="col left-pic-section" data-aos="fade-right" data-aos-duration="1000">
        <img className="skills-pic" src={ClockTaskImg} alt="pic-of-me"></img>
        </div>
</div>
        </div>
    </section>
}

export default ClockTask;