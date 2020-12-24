import React from 'react';

var year = new Date().getFullYear();

function Footer(){
    return <footer>
    <p>© {year}. All Rights Reserved.</p>
    <p>Website designed and developed by Mashu Maru.</p>
    <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </footer>
}

export default Footer;