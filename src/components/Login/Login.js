import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../constexts/UserContext';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate(); 
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e)  => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {raplace: true});
            })
            .catch(error => console.error(error));
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>

            {/* login form */}
            <form onSubmit={handleSubmit}>
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