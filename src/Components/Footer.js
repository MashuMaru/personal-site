import React from 'react';

var year = new Date().getFullYear();

function Footer(){
    return <p>© {year}. All Rights Reserved.</p>
}

export default Footer;