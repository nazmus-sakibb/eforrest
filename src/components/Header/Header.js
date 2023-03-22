import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
        </nav>
    );
};

export default Header;