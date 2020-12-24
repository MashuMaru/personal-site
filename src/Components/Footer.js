import React from 'react';

var year = new Date().getFullYear();

function Footer(){
    return <footer>
    <p className='copyright'>© {year}. All Rights Reserved.</p>
    <p className='copyright'>Website designed and developed by Mashu Maru.</p>
    </footer>
}

export default Footer;