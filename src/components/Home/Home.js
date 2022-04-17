import React, { useEffect, useState } from 'react';
import './Home.css'
import HeaderImage from '../../images/header-image.png'
import ServiceCard from '../ServiceCard/ServiceCard';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <main>

                <div className="header-container">
                    <div>
                        <h1 className='header-title'>WELCOME TO MY <br /> ELECTRICAL GALAXY !</h1>
                        <p className='header-desc'>Live long and save electricity. Imagine your life without electricity. <br /> Save electricity, save money and save planet. <br /> Save today – Use tomorrow</p>
                        <button onClick={()=>navigate('/signUp')} className='register-button'>REGISTER NOW</button>
                    </div>
                    <div>
                        <img className='header-image' src={HeaderImage} alt="" />
                    </div>
                </div>
                <h1 className='service-title'>My Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <ServiceCard key={service.id} service={service} />)
                    }
                </div>

            </main>
        </div>
    );
};

export default Home;