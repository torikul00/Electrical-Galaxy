import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import useSocialLogin from '../hooks/useSocialLogin';
import auth from '../firebase.init';
const SignUp = () => {
    const { signInGoogle } = useSocialLogin()
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()



    const handleSignUp = (event) => {
        event.preventDefault()
        if (email.value === '') {
            setEmail({ value: '', error: 'Email is required' })
        }
        if (password.value === '') {
            setPassword({ value: '', error: 'Password is required' })
        }
        if (email.value && password.value && confirmPassword.value) {
            // signup new user

            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    emailVerification()

                    navigate(from, { replace: true });
                })

                // error
                .catch(() => toast.error('Email Already Registered', { id: "test", duration: 3000, style: { backgroundColor: 'black', color: 'white', } }))

        }
    }
    const emailVerification = () => {

        sendEmailVerification(auth.currentUser)
            .then(() => toast.success('Email verification sent'))
            .catch(() => toast.error('Something went wrong'))
    }
    const handleEmail = (email) => {
        if (/^\S+@\S+\.\S+$/.test(email)) {

            setEmail({ value: email, error: '' })
        }
        else {
            setEmail({ value: '', error: 'Invalid Email' })
        }
    }
    const handlePassword = (password) => {
        if (password.length < 6) {
            setPassword({ value: '', error: 'Password is too short ' })
        }
        else { setPassword({ value: password, error: '' }) }
    }
    const handleConfirmPassword = (confirmpassword) => {
        if (password.value === confirmpassword) {
            setConfirmPassword({ value: confirmPassword, error: '' })
        }
        else {
            setConfirmPassword({ value: '', error: 'Password is not Match' })
        }
    }
    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleSignUp}>
                    <h1 className='form-title'>Please Sign Up</h1>
                    <div className="inputs">


                        {
                            email?.error && <small style={{ color: 'red' }}>{email.error}</small>
                        }
                        <input onBlur={(e) => handleEmail(e.target.value)} name='email' type="email" placeholder='Email' required />


                        {
                            password?.error && <small style={{ color: 'red' }}>{password.error}</small>
                        }
                        <input onBlur={(e) => handlePassword(e.target.value)} name='password' type="password" placeholder='Password' required />



                        <input onBlur={(e) => handleConfirmPassword(e.target.value)} name='confirmPassword' type="password" placeholder='Confirm Password' required /> <br />
                        {
                            confirmPassword?.error && <small style={{ color: 'red' }}>{confirmPassword.error}</small>
                        }

                        <input type='submit' className='button' value='Sign Up' />
                        <p className='signup-link'>Already Registered ? <Link to="/login">Login </Link></p>

                    </div>
                    <div className="horizontal">
                        <div className='line' />
                        <p>OR</p>
                        <div className='line' />

                    </div>
                    <div className="icons">
                        <FcGoogle className='google-icon' onClick={signInGoogle} />

                    </div>
                </form>


            </div>
        </div>
    );
};

export default SignUp;