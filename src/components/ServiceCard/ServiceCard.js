import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { title, image, desc, price } = service
    return (
        <div>
            <div className="card-info">
                <img src={image} alt="" />
                <h1>{title}</h1>
                <p>{ desc}</p>
                <h3> Service Charge : $ {price}</h3>
                <button className='checkout-button'>Checkout Service</button>

            </div>

        </div>
    );
};

export default ServiceCard;