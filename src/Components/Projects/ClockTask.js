import React from 'react';
import ClockTaskImg from '../Projects/images/ClockTasks-img.png';
import AOS from 'aos';

function ClockTask() {
    AOS.init()
    return <section id="projects" data-aos="fade-left" data-aos-duration="500">
    {/* <hr></hr> */}
    <div className="container-div">
    <div className='projects-section'>
        {/* <h1 className="title">Projects</h1> */}
        <div className="col about-information-left">
        <h3 className="left-description">Clock and To Do List</h3>
        <p className="about-details">This project went from creating a simple clock, 
        whilst following through with a tutorial, then it lead to this final to do list web application.</p>
        <p className="about-details">I built this as I would actually find it useful, 
        and to push my JavaScript and jQuery knowledge even further.</p> 
        <p className="about-details">I built the web application using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>jQuery</li></p>
        <p className="caveat"><i>Not yet deployed.</i></p>


        </div>

        <div className="col left-pic-section" data-aos="fade-right" data-aos-duration="1000">
        <img className="skills-pic" src={ClockTaskImg} alt="pic-of-me"></img>
        </div>
</div>
        </div>
    </section>
}

export default ClockTask;