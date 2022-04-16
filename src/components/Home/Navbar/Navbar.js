import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <h2 className='logo'>ELECTRICAL - GALAXY</h2>
                </div>
                <div>
                <a href="/">Home</a>
                <a href="/blog">Blogs</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;