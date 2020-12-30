import React, { useState } from 'react';
import HeaderImg from '../header-img1.jpg';

function Header(){
    const [isMousedOver, setMousedOver] = useState(false);
    const [isMousedOut, setMousedOut] = useState(true);

    function mousedOver(){
        setMousedOver(true);
    }

    function mousedOut() {
        setMousedOut(setMousedOver(false));
    }

    return <header>

    <img className="header-img" src={HeaderImg} alt="header-img"></img>
        <h1 className='header-h1'>I am <span className='name'>Mashu Maru</span>, and welcome to my site.</h1>
        <p className='header-p'>A <span className='emphasis'>website</span> and <span className='emphasis'>web application</span> developer.</p>
        <button className='find-button' href="#about"><a href="#about">Find out more <i class="fas fa-angle-double-down"></i></a></button>
        <button onMouseOver={mousedOver} onMouseOut={mousedOut} className='contact-button' href="#about"><a href="#about">{isMousedOver ? <i className="far fa-envelope"></i> : 'Contact Me'}</a></button>
    </header>

}

export default Header;

