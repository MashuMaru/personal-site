import React from 'react';

var year = new Date().getFullYear();

function Footer(){
    return <footer>
    <p>© {year}. All Rights Reserved.</p>
    <p>Website designed and developed by _ _ _ _.</p>
    </footer>
}

export default Footer;