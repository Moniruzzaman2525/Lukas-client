import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, image, inStock, price, mnQuantity, description } = service;
    return (
        <div class="mx-auto card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>InStock: {inStock}</p>
                {/* <p>Minimum Quantity: {mnQuantity}</p> */}
                <div class="card-actions">
                    <Link to={`/purchase/${_id}`}>
                        <button class="btn btn-primary">Buy now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;