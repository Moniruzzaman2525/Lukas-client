import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order }) => {
    return (


        <div class="card w-96 bg-base-100 mx-auto shadow-xl">
            <figure class="px-10 pt-10">
                <img src={order.image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{order.productName}</h2>
                <p>Total Order Product: {order.qtn}</p>
                <p>Total Price: ${order.price}</p>
                <div class="card-actions">
                    {
                        (order.price && order.paid) ? <Link to="/dashboard/myreview"><button class="btn font-bold text-white btn-success">Review</button></Link> : <span className='text-xl mt-2'>Please pay</span>
                    }
                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button class="btn text-white font-bold btn-success ">Pay</button></Link>}
                    {(order.price && order.paid) && <span class="text-xl mt-2">Paid</span>}
                </div>

            </div>
        </div>
    );
};

export default Order;