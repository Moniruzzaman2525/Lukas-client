import React from 'react';

const Manage = ({ service, handleDelete }) => {
    const { _id, productName, image, userName } = service;
    return (
        <tr>
            <td>{userName}</td>
            <td className='uppercase'>${productName}</td>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={image} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>
                <button class="btn btn-sm btn-primary mr-2">Pay</button>
                <button onClick={() => handleDelete(_id)} class="btn btn-sm btn-primary">Cancel</button>
            </td>
        </tr>
    );
};

export default Manage;