import React from 'react';
import HeaderImg from '../header-img.jpg';

function Header(){
    return <header>
    {/* <img className="header-img" src={HeaderImg} alt="header-img"></img> */}
        <h1 className='header-h1'>I am <span className='name'>Mashu Maru</span>, and welcome to my site.</h1>
        <p className='header-p'>A <span className='emphasis'>website</span> and <span className='emphasis'>web application</span> developer.</p>
        <button className='find-button'>Find out more.</button>
    </header>

}

export default Header;

