import React from 'react';

function Header(){
    return <header>
            <h1 className='header-h1'>I am <span className='name'>Mashu Maru</span>, and welcome to my site.</h1>
            {/* <img src={require('./images/header-img.jpg')} alt="header-img"/> */}
            <p className='header-p'>A <span className='emphasis'>website</span> and <span className='emphasis'>web application</span> developer.</p>
            <button className='find-button'>Find out more. <img src={require('./images/down-arrow.png')}/></button>
            </header>
}

export default Header;