import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>

            {/* login form */}
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' required />
                </div>
                <input className='button-submit' type="submit" value="Login" />
            </form>
            <p><small>New to eForrest? <Link to='/signup'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;