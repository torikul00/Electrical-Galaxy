import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const navigate = useNavigate()
    const { title, image, desc, price } = service
    return (
        <div>
            <div className="card-info">
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{ desc}</p>
                <h3> Service Charge : $ {price}</h3>
                <button onClick={()=>navigate('/checkout')} className='checkout-button'>Checkout Service</button>

            </div>

        </div>
    );
};

export default ServiceCard;