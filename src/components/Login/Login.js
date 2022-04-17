import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Share/Login-SignUp.css'
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import useSocialLogin from '../hooks/useSocialLogin';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import auth from '../firebase.init';



const Login = () => {
    const { signGithub, signInGoogle } = useSocialLogin()
    const navigate = useNavigate()
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const handleEmail = (email) => {
        if (/^\S+@\S+\.\S+$/.test(email)) {
            setEmail({ value: email, error: '' })
        }
        else {
            setEmail({ value: '', error: 'Email is invalid' })
        }

    }
    const handlePassword = (password) => {
        if (password.length > 5) {
            setPassword({ value: password, error: '' })
        }
        else {
            setPassword({ value: '', error: 'Password is Invalid' })
        }
    }
    const handleSignIn = (e) => {

        e.preventDefault()
        if (email && password) {


            signInWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    toast.success('Login Successful', { id: 'login' })
                    navigate('/')

                })
                .catch(() => {
                    toast.error('Invalid email and password', { id: 'error5' })
                })
        }


    }



    return (
        <div className='form-container'>
        <form >
            <h1 className='form-title'>Please Login</h1>
            <div className="inputs">
                    <input onBlur={(e) => handleEmail(e.target.value)} type="email" placeholder='Email' name='email' />
                    {
                        email?.error && <small className='error-message'>{email.error}</small>
                    }
                <input  type="password" placeholder='Password' name='password' /> <br />
                <p onClick={()=>navigate('/resetPassword')} className='forgot-password'>Forgot Password ?</p>
                <button type='submit' className='button'>Login</button>
                <p className='signup-link'>New User ? <Link to="/signup">Sign Up </Link></p>

            </div>

            <div className="horizontal">
                <div className='line' />
                <p>OR</p>
                <div className='line' />

            </div>
            <div className="icons">
                <FcGoogle onClick={signInGoogle}  className='google-icon' />
                <BsGithub  onClick={signGithub} className='github-icon' />
            </div>


        </form>

    </div>
    );
};

export default Login;