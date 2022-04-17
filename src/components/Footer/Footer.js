import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date()
    const thisYear = today.getFullYear()
    return (
        <footer>
            <h3>Copyright -Torikul Islam - &copy; {thisYear} </h3>

        </footer>
    );
};

export default Footer;