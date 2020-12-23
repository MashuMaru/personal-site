import React from 'react';

var year = new Date().getFullYear();

function Footer(){
    return <footer>
    <p>© {year}. All Rights Reserved.</p>
    <p>Website designed and developed by Matthew Berényi.</p>
    </footer>
}

export default Footer;