import React from 'react';
import Mashumaru from '../mashumaru.jpg'

function About() {
    return <div id='about' className='about-section'>
        <h1 className="about-title">About</h1>
        <img className="profile-pic" src={Mashumaru}></img>
        <h3 className="about-description">I am a self-taught website and web application developer.</h3>
    </div>
}

export default About;