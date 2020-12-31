import React from 'react';

var year = new Date().getFullYear();

function Footer(){
    return <footer id="connect">
    <hr></hr>
    <p class="connect-p">For collaborations, project work or questions, contact me via the below links!</p>
    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mycodejournal/"><i class="fab fa-instagram fa-2x icons"></i></a>
    <a target="_blank" rel="noreferrer" href="https://twitter.com/Mattmaru1"><i class="fab fa-twitter fa-2x icons"></i></a>
    <a target="_blank" rel="noreferrer" href="https://github.com/MashuMaru"><i class="fab fa-github fa-2x icons"></i></a>
    <a target="_blank" rel="noreferrer" href="mailto:mfberenyi@gmail.com"><i class="fas fa-envelope-open-text fa-2x icons"></i></a> 
    <p>© {year}. All Rights Reserved.</p>
    <p>Website designed and developed by Mashu Maru.</p>
    {/* <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" rel="noreferrer" title="Pixel perfect">Pixel perfect</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p> */}
    <p>Icons made by <a href="https://fontawesome.com/" rel="noreferrer">Font Awesome</a> from <a target="_blank" href="https://fontawesome.com/" rel="noreferrer" title="Font Awesome">www.fontawesome.com</a></p>
    </footer>
}

export default Footer;