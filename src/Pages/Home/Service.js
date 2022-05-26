import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, image, inStock, price, mnQuantity, description } = service;
    return (
        <div className="mx-auto card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className=''>{description}</p>
                <p className='text-xl font-bold'>Price: ${price} <span className='font-normal'>(per piece)</span></p>
                <p className='text-xl'>InStock: {inStock}</p>
                <p className='text-xl font-semibold'>Minimum Order Quantity: {mnQuantity}</p>
                <div className="card-actions">
                    <Link to={`/purchase/${_id}`}>
                        <button className="btn btn-success text-white font-bold btn-primary">Buy now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;