import React from 'react';
import Image from '../Projects/images/mashumaru_site1.png';
import AOS from 'aos';

function PersonalSite() {
    AOS.init()
    return <section id="about" data-aos="fade-left" data-aos-duration="2000">
    {/* <hr></hr> */}
    <div className='about-section'>
        {/* <h1 className="title">Projects</h1> */}
        <div className="col about-information-left">
        <h3 className="left-description">Portfolio Website</h3>
        <p className="about-details">This is my portfolio website I created so you can get to know me, 
        and see the projects I have built from scratch. </p>
        <p className="about-details">In future, I may add a 'blog' page to this also, 
        to document my journey in web development, techniques I have learnt, new sites. 
        So... watch this space!</p> 
        <p className="about-details">I built the website using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>Javascript</li></p>
        <p className="about-details"><li>React.JS</li></p>


        </div>

        <div className="col left-pic-section">
        <img className="skills-pic" src={Image} alt="pic-of-me"></img>
        </div>

        </div>
    </section>
}

export default PersonalSite;