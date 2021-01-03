import React, { useState } from 'react';
import HeaderImg from '../header-img2.JPG';

function Header(){
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

    return <header>
<div className="header-section">
    <img className="header-img" src={HeaderImg} alt="header-img"></img>
    
        <h1 className='header-h1'>I am <span className='name'>Mashu Maru</span>, and welcome to my site.</h1>
        <p className='header-p'>A self-taught frontend <span className='emphasis'>website</span> and <span className='emphasis'>web application</span> developer.</p>
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
    </header>

}

export default Header;

