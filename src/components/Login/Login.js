import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
        <form >
            <h1 className='form-title'>Please Login</h1>
            <div className="inputs">
                <input type="email" placeholder='Email' name='email' />

                <input  type="password" placeholder='Password' name='password' /> <br />
                <p  className='forgot-password'>Forgot Password ?</p>
                <button type='submit' className='button'>Login</button>
                <p className='signup-link'>New User ? <Link to="/signup">Sign Up </Link></p>

            </div>

            <div className="horizontal">
                <div className='line' />
                <p>OR</p>
                <div className='line' />

            </div>
            <div className="icons">
                {/* <FcGoogle  className='google-icon' />
                <BsFacebook  className='facebook-icon' />
                <BsGithub  className='github-icon' /> */}
            </div>


        </form>

    </div>
    );
};

export default Login;