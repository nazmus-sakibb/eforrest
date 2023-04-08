import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../constexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
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
                {
                    user?.uid ?
                        <button className='btn-logout' onClick={logOut}>Log Out</button>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }
                {/* <span>{user?.email}</span> */}
            </nav>
        </header>
    );
};

export default Header;