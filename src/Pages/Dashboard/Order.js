import React from 'react';

const Order = ({ order, handleCancel }) => {
    return (
        <tr>
            <th>{order.userName}</th>
            <td className='uppercase'>{order.productName}</td>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={order.image} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>
                <button class="btn btn-sm btn-primary mr-2">Pay</button>
                <button onClick={() => handleCancel(order._id)} class="btn btn-sm btn-primary">Cancel</button>
            </td>
        </tr>
    );
};

export default Order;