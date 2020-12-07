import React from 'react';
import LogoImg from '../../newlogo.png';

import './Logo.styles.css';

const Logo = ({logoClass}) => {

    return (
        <span>
            <img src={LogoImg} className={logoClass} alt="MealSaver logo" />
        </span>
    )
}

export default Logo;