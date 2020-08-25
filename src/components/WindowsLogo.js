import React from 'react';
import logo from '../picSrc/windowslogo.png';

const WindowsLogo = ({
    height,
    width
}) => {

    return (
        <img src={logo} style={{height, width}} alt='windows logo' draggable='false'/>
    );
};

export default WindowsLogo;