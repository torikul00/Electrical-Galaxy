import React from 'react';
import notFoundPic from '../../images/404.jpg'
import './NotFound.css'
const NotFound = () => {

    return (
        <div className='not-container'>
            <img src={notFoundPic} alt="not found page" />
        </div>
    );
};

export default NotFound;