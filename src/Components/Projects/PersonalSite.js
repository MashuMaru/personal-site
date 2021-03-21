import React from 'react';
import Image from '../Projects/images/mashumaru-site1.png';
import ReactImg from '../Projects/images/Logos/react.png';
import HTMLImg from '../Projects/images/Logos/html.png';
import CSSImg from '../Projects/images/Logos/css.png';
import JavaScriptImg from '../Projects/images/Logos/javascript.png';
import AOS from 'aos';

function PersonalSite() {
    AOS.init()
    return <section id="projects" data-aos="fade-left" data-aos-duration="500">
    {/* <hr></hr> */}
    <div className="container-div">
    <div className='about-section'>
        {/* <h1 className="title">Projects</h1> */}
        <div className="col about-information-left">
        <h3 className="left-description">Portfolio Website</h3>
        <img class="tech-logo" src={HTMLImg} alt="html-img"></img>
        <img class="tech-logo" src={CSSImg} alt="css-img"></img>
        <img class="tech-logo" src={JavaScriptImg} alt="js-img"></img>
        <img class="tech-logo" src={ReactImg} alt="react-img"></img>
        <p className="about-details">This is my portfolio website I created so you can get to know me, 
        and see the projects I have built from scratch. </p>
        <p className="about-details">In future, I may add a 'blog' page to this also, 
        to document my journey in web development, techniques I have learnt, new sites. 
        So... watch this space!</p> 
        <p className="about-details">I built the website using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>Javascript</li></p>
        <p className="about-details"><li>React.js</li></p>


        </div>

        <div className="col left-pic-section" data-aos="fade-right" data-aos-duration="1000">
        <img className="skills-pic" src={Image} alt="pic-of-me"></img>
        </div>

        </div>
        </div>
    </section>
}

export default PersonalSite;