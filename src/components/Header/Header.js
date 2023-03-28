import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            {/* logo */}
            <img src={logo} alt="" />

            {/* navbar */}
            <nav className='navbar'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;