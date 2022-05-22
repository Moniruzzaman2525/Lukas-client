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
        <div>
            <div class="mx-auto card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={service.image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{service.name}</h2>
                    <p>{service.description}</p>
                    <p>Price: ${service.price}</p>
                    <p>InStock: {service.inStock}</p>
                    <p>Minimum Quantity: {service.mnQuantity}</p>
                </div>
            </div>
        </div>
    );
};

export default Purchase;