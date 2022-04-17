import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Navbar.css'
const Navbar = () => {
   const [user , setUser] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
               
            }
            else {
                setUser({})
           }
        })
    }, [])

    const handleLogout = () => {
        signOut(auth)
            .then(() => toast.success('Sign Out seccesful'))
        .catch(()=>toast.error('Something went wrong'))
    }
    
    return (
        <>
            <nav>
                <div>
                    <h2 onClick={() => navigate('/')} className='logo'>ELECTRICAL - GALAXY</h2>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blogs</Link>
                    <Link to="/about">About</Link>
                    {user?.uid? <button  className='login-button' onClick={handleLogout}>Sign Out</button>
                        : 
                    <button className='login-button' onClick={() => navigate('/login')}>Login</button>
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;