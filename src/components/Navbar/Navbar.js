import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate()
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
                    <button className='login-button' onClick={()=>navigate('/login')}>Login</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;