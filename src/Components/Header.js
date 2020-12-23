import React from 'react';

function Header(){
    return <header className='main-section'>
        <h1>Hello, I am <span className='name'>Matthew Berényi</span>, and welcome to my site.</h1>
        {/* <img src={require('./images/header-img.jpg')} alt="header-img"/> */}
        <p>Website and web application developer.</p>
    </header>
}

export default Header;