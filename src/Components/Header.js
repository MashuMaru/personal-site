import React from 'react';

function Header(){
    return <header className='main-section'>
        <h1>I am <span className='name'>_ _ _ _ _</span>, and welcome to my site.</h1>
        {/* <img src={require('./images/header-img.jpg')} alt="header-img"/> */}
        <p>A Website and web application developer.</p>
    </header>
}

export default Header;