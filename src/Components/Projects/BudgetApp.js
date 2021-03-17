import React from 'react';
import BudgetAppImg from '../Projects/images/BudgetAppImg.png';
import AOS from 'aos';
import HTMLImg from '../Projects/images/Logos/html.png';
import CSSImg from '../Projects/images/Logos/css.png';
import JavaScriptImg from '../Projects/images/Logos/javascript.png';
import VueImg from '../Projects/images/Logos/vue.png';

function BudgetApp() {
    AOS.init()
    return <section id="projects" data-aos="fade-left" data-aos-duration="500">
    {/* <hr></hr> */}
    <div className="container-div">
    <div className='projects-section'>
        {/* <h1 className="title">Projects</h1> */}
        <div className="col about-information-left">
        <h3 className="left-description">Budget App</h3>
        <img class="tech-logo" src={HTMLImg} alt="html-img"></img>
        <img class="tech-logo" src={CSSImg} alt="css-img"></img>
        <img class="tech-logo" src={JavaScriptImg} alt="js-img"></img>
        <img class="tech-logo" src={VueImg} alt="vue-img"></img>
        <p className="about-details">A simple web application built for managing your financial budgets, expenditures.</p>
        <p className="about-details">I built this, well, because I cancelled my subscription for Excel, so decided to build
        a budget application my self.</p> 
        <p className="about-details">This is the first of many applications I have built using Vue.js JavaScript framework.</p>
        <p className="about-details">I built the web application using:</p>
        <p className="about-details"><li>HTML</li></p>
        <p className="about-details"><li>CSS</li></p>
        <p className="about-details"><li>Vue.js</li></p>
        <p className="port-link"><a rel="noreferrer" href="https://mashu-budget-app.netlify.app/" target="_blank">Click here to check it out!</a></p>


        </div>

        <div className="col left-pic-section" data-aos="fade-right" data-aos-duration="1000">
        <img className="skills-pic" src={BudgetAppImg} alt="pic-of-me"></img>
        </div>
</div>
        </div>
    </section>
}

export default BudgetApp;