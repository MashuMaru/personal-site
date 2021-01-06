import React, { useState } from 'react';
import HeaderImg from '../Components/Projects/images/header-img-ver2.JPG';
import AOS from 'aos';

function Header(){
    AOS.init()
    const [isMousedOver, setMousedOver] = useState(false);
    const [isMousedOut, setMousedOut] = useState(true);
    const [isMouseOver, setMouseOver] = useState(false);
    const [isMouseOut, setMouseOut] = useState(true);

    function mousedOver(){
        setMousedOver(true);
    }

    function mousedOut() {
        setMousedOut(setMousedOver(false));
    }

    function mouseOver(){
        setMouseOver(true);
    }

    function mouseOut() {
        setMouseOut(setMouseOver(false));
    }

    return <header id="home">
<div className="header-section">
    <img className="header-img" src={HeaderImg} alt="header-img"></img>
    {/* data-aos="fade-right" data-aos-duration="1000" to below */}
    <div>

        {/* <h1 className='header-h1'>I am <span className='name'>Mashumaru</span>, and welcome to my site.</h1>
        <p className='header-p'>A self-taught frontend <span className='emphasis'>website</span> and <span className='emphasis'>web application</span> developer.</p>
        <div data-aos="fade-right" data-aos-duration="2000"> */}
        <h1 className='header-h1'>Hi, I am a self-taught <span className='name'>Frontend Web Developer</span>. </h1>
        <p className='header-p'>Welcome to my <span className='emphasis'>*Portfolio</span> website.<i className="caveat"> (*Developed by yours truly).</i></p>
        {/* data-aos="fade-right" data-aos-duration="2000" to below */}
        <div >
        <a href="#about">
        <button onMouseEnter={mouseOver} onMouseLeave={mouseOut} className='find-button' href="#about">
        {isMouseOver ? <i class="fas fa-angle-double-down"></i> : 'Find out more'} 
        {isMouseOut && null}
        </button></a>

        <a href="#connect">
        <button onMouseEnter={mousedOver} onMouseLeave={mousedOut} className='contact-button' href="#connect">
        {isMousedOver ? <i className="far fa-envelope"></i> : 'Contact Me'}
        {isMousedOut && null}
        </button></a>
        </div>
        </div>
        </div>
    </header>

}

export default Header;

