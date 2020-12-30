import React, { useState } from 'react';
import HeaderImg from '../header-img1.jpg';

// const [isMousedOver, setMousedOver] = useState(false);
// const [isMousedOut, setMousedOut] = useState(true);

// const image = <i className="far fa-envelope"></i>;

// function mousedOver(){
//         setMousedOver(true);
//     }

// function mousedOut() {
//     setMousedOut(false);
// }



function Header(){
    return <header>

    <img className="header-img" src={HeaderImg} alt="header-img"></img>
        <h1 className='header-h1'>I am <span className='name'>Mashu Maru</span>, and welcome to my site.</h1>
        <p className='header-p'>A <span className='emphasis'>website</span> and <span className='emphasis'>web application</span> developer.</p>
        <button className='find-button' href="#about"><a href="#about">Find out more <i class="fas fa-angle-double-down"></i></a></button>
        {/* <button onMouseOver={mousedOver} onMouseOut={mousedOut} className='contact-button' href="#about"> */}
        <button className='contact-button' href="#about"><a href="#about">Contact Me <i className="far fa-envelope"></i> </a></button>
        {/* <a href="#about">Contact Me {mousedOver ? <i className="far fa-envelope"></i> : null} {mousedOut && null}</a></button> */}

    </header>

}

export default Header;

