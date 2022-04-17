import React from 'react';
import { Link } from 'react-router-dom';
import '../Share/Login-SignUp.css'
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';



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
                <FcGoogle  className='google-icon' />
                <BsGithub  className='github-icon' />
            </div>


        </form>

    </div>
    );
};

export default Login;