import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <header className='header'>
            {/* logo */}
            <img src={logo} alt="" />

            {/* navbar */}
            <nav className='navbar'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </nav>
        </header>
    );
};

export default Header;