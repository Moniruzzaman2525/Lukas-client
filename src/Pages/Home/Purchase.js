import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content grid md:grid-cols-2">
                <img src={service.image} class="max-w-sm mx-auto rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold uppercase">{service.name}</h1>
                    <p class="py-6">Price: ${service.price}</p>
                    <p>InStock: {service.inStock}</p>
                    <p>Minimum Quantity: {service.mnQuantity}</p>
                    <p>Minimum Quantity: {service.description}</p>
                    <button class="btn btn-primary">Pay Now</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;