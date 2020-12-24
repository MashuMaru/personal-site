import React from 'react';

function Header(){
    return <header className='main-section'>
        <h1>I am <span className='name'>Mashu Maru</span>, and welcome to my site.</h1>
        {/* <img src={require('./images/header-img.jpg')} alt="header-img"/> */}
        <p>A <span className='emphasis'>website</span> and <span className='emphasis'>web application</span> developer.</p>
    </header>
}

export default Header;