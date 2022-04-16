import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <h2 className='logo'>ELECTRICAL - GALAXY</h2>
                </div>
                <div>
                <Link to="/">Home</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;