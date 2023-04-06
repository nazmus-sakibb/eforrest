import React from 'react';
import './SignUp.css';

import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>

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
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" id='confirm' name='confirm' required />
                </div>
                <input className='button-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default SignUp;