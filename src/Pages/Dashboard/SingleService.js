import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service, handleDelete }) => {
    const { _id, name, image, inStock, price, mnQuantity, description } = service;
    return (
        <div className="mx-auto card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>InStock: {inStock}</p>
                <p>Minimum Quantity: {mnQuantity}</p>
                <div className="card-actions">
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-success text-white font-bold">Delete Product</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;