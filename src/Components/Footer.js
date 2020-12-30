import React from 'react';

var year = new Date().getFullYear();

function Footer(){
    return <footer id="connect">
    <hr></hr>
    <p class="connect-p">Connect with me!</p>
    <a target="_blank" href="https://www.instagram.com/mycodejournal/"><i class="fab fa-instagram fa-2x icons"></i></a>
    <a target="_blank" href="https://github.com/MashuMaru"><i class="fab fa-github fa-2x icons"></i></a>
    <a target="_blank" href="mailto:mfberenyi@gmail.com"><i class="fas fa-envelope-open-text fa-2x icons"></i></a> 
    <p>© {year}. All Rights Reserved.</p>
    <p>Website designed and developed by Mashu Maru.</p>
    <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
    </footer>
}

export default Footer;