import React, {useState} from 'react';
import AOS from 'aos';

var year = new Date().getFullYear();

function Footer(){
    const [isMousedOver, setMousedOver] = useState(false);
    const [isMousedOut, setMousedOut] = useState(true);

    function mousedOver(){
        setMousedOver(true);
    }

    function mousedOut() {
        setMousedOut(setMousedOver(false));
    }

    AOS.init()
    return  <div id="connect" className="footer">
    <hr></hr>
    <p class="connect-p">For collaborations, project work or questions, contact me via the below links!</p>
    {/* data-aos="zoom-in" data-aos-duration="500" to below */}
    <div>
    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mycodejournal/"><i class="fab fa-instagram fa-2x icons"></i></a>
    <a target="_blank" rel="noreferrer" href="https://twitter.com/Mattmaru1"><i class="fab fa-twitter fa-2x icons"></i></a>
    <a target="_blank" rel="noreferrer" href="https://github.com/MashuMaru"><i class="fab fa-github fa-2x icons"></i></a>
    <a target="_blank" rel="noreferrer" href="mailto:mfberenyi@gmail.com"><i class="fas fa-envelope-open-text fa-2x icons"></i></a> 
    </div>
    <a href="#home">
        <button onMouseEnter={mousedOver} onMouseLeave={mousedOut} className='home-button' href="#home">
        {isMousedOver ? <i className="fas fa-home"></i> : 'Home'}
        {isMousedOut && null}
        </button></a>
    <p>© {year}. All Rights Reserved.</p>
    <p>Website designed and developed by Mashu Maru.</p>
    {/* <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" rel="noreferrer" title="Pixel perfect">Pixel perfect</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p> */}
    <p>Icons made by <a href="https://fontawesome.com/" rel="noreferrer">Font Awesome</a> from <a target="_blank" href="https://fontawesome.com/" rel="noreferrer" title="Font Awesome">www.fontawesome.com</a></p>
    {/* <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p> */}

    </div>

}

export default Footer;