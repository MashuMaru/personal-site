import React from 'react';
import Arrow from '../down-arrow.png';
import HeaderImg from '../header-img1.jpg';

function Header(){
    return <header>
    <img className="header-img" src={HeaderImg} alt="header-img"></img>
        <h1 className='header-h1'>I am <span className='name'>Mashu Maru</span>, and welcome to my site.</h1>
        <p className='header-p'>A <span className='emphasis'>website</span> and <span className='emphasis'>web application</span> developer.</p>
        <button className='find-button' href="#about"><a href="#about">Find out more</a></button>
        <button className='contact-button' href="#about"><a href="#about">Contact Me</a></button>
    </header>

}

export default Header;

