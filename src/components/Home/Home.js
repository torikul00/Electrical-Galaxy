import React, { useEffect, useState } from 'react';
import './Home.css'
import HeaderImage from '../../images/header-image.png'
import ServiceCard from '../ServiceCard/ServiceCard';
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <main>
                
                <div className="header-container">
                    <div>
                        <h1 className='header-title'>WELCOME TO MY <br /> ELECTRICAL GALAXY !</h1>
                        <p className='header-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, <br /> obcaecati eius consequatur <br /> ea dolorum harum modi beatae laudantium omnis porro?</p>
                        <button className='register-button'>REGISTER NOW</button>
                    </div>
                    <div>
                        <img className='header-image' src={HeaderImage} alt="" />
                    </div>
                </div>
                <h1 className='service-title'>My Services</h1>
                <div className="services-container">
                    {
                     services.map(service => <ServiceCard key={service.id} service= {service} /> )   
                    }
                </div>

            </main>
        </div>
    );
};

export default Home;