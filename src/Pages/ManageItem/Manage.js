import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Manage = ({ service, refetch }) => {
    const { _id, isDeliverd, productName, image, userName, transactionId } = service;

    const makeShip = () => {
        fetch(`https://cryptic-retreat-62396.herokuapp.com/ship/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: ` Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ isDeliverd: true })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success('On the way for Delivery')
                }
                else {
                    toast.error('Cant Shipped')
                }
            })
    }

    return (
        <tr>
            <td>{userName}</td>
            <td className='uppercase'>${productName}</td>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={image} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>
                {transactionId ? 'Paid' : 'Pending'}
            </td>
            <td>
                {
                    isDeliverd ? 'Delivery Complete' : <button onClick={makeShip} disabled={!transactionId} className="btn btn-sm btn-success text-white font-bold">Delivery</button>
                }
            </td>
        </tr>
    );
};

export default Manage;