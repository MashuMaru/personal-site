import React from 'react';
import Image from '../programming.png'

function About() {

    return <section id="about">
    <hr></hr>
    <div className='about-section'>
        <h1 className="title">Skills</h1>
    <div className="col about-pic-section">
        <img className="skills-pic" src={Image} alt="pic-of-me"></img>
        </div>


        <div className="col about-information">
        <h3 className="description">Front End Development</h3>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>Javascript</li></p>
        <p className="about-details"><li>jQuery</li></p>
        <p className="about-details"><li>React.JS</li></p>
        </div>
        </div>
    </section>
}

export default About;