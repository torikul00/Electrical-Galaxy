import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Share/Login-SignUp.css'
import { FcGoogle } from 'react-icons/fc';
import useSocialLogin from '../hooks/useSocialLogin';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import auth from '../firebase.init';



const Login = () => {
    const { signInGoogle } = useSocialLogin()
    const navigate = useNavigate()
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    
    const handleEmail = (email) => {
        if (/^\S+@\S+\.\S+$/.test(email)) {
            setEmail({ value: email, error: '' })
        }
        else {
            setEmail({ value: '', error: 'Email is not valid' })
        }

    }
    const handlePassword = (password) => {
        if (password.length > 5) {
            setPassword({ value: password, error: '' })
        }
        else {
            setPassword({ value: '', error: 'Password is not  valid' })
        }
    }
    const handleSignIn = (e) => {

        e.preventDefault()
        if (email && password) {


            signInWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    toast.success('Login Successful', { id: 'login' })
                    navigate(from, { replace: true });

                })
                .catch(() => {
                    toast.error('Invalid email or password', { id: 'error5' })
                })
        }


    }



    return (
        <div className='form-container'>
            <form onSubmit={handleSignIn}>
                <h1 className='form-title'>Please Login</h1>
                <div className="inputs">
                    {
                        email?.error && <small className='error-message'>{email.error}</small>
                    }
                    <input onBlur={(e) => handleEmail(e.target.value)} type="email" placeholder='Email' name='email' />
                    {
                        password?.error && <small className='error-message'>{password.error}</small>
                    }
                    <input onBlur={(e) => handlePassword(e.target.value)} type="password" placeholder='Password' name='password' /> <br />
                    <p onClick={() => navigate('/resetPassword')} className='forgot-password'>Forgot Password ?</p>
                    <button type='submit' className='button'>Login</button>
                    <p className='signup-link'>New User ? <Link to="/signup">Sign Up </Link></p>

                </div>

                <div className="horizontal">
                    <div className='line' />
                    <p>OR</p>
                    <div className='line' />

                </div>
                <div className="icons">
                    <FcGoogle onClick={signInGoogle} className='google-icon' />
                   
                </div>


            </form>

        </div>
    );
};

export default Login;