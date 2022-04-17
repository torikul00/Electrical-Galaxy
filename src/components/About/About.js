import React from 'react';
import torikul from '../../images/torikul.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <div className="profile-info">
                <img src={torikul} alt="" />
                <h2>Name : Torikul Islam</h2> 
                <p>Goal - <br />
                I want to be a webdeveloper in among this year . My childhood dream is to have a remote job in USA. I'm always willing to work hard to get a remote job. I have full confidence that i can fullfil my dream and i will react my goal.
                
                
                
                </p>

           </div>
        </div>
    );
};

export default About;