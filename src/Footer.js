import React from 'react';

const Footer = ({windowSize}) => {
    var footerSize = windowSize[0] * .009;

    if (footerSize > 14) {
        footerSize = 14;
    } else if(footerSize < 10) {
        footerSize = 10;
    }

    return (
        <div style={{margin: 'auto', width: '20%', marginTop: 10, color: 'gray'}}>
            <p style={{textAlign: 'center', fontSize: footerSize}}>
            &copy; Copyright 2021 codebean
            </p>
            <a id="explore" href="#explore"> </a>
        </div>
    );
};

export default Footer;