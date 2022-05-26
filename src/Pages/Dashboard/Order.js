import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order }) => {
    return (
        // <div>

        //     <div class="w-20 rounded">
        //         <img src={order.image} alt="Tailwind-CSS-Avatar-component" />
        //     </div>


        //     {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-sm btn-primary mr-2">Pay</button></Link>}
        //     {(order.price && order.paid) && <span class="text-success">Paid</span>}

        //     {
        //         (order.price && order.paid) ? <Link to="/dashboard/myreview"><button class="btn btn-sm btn-primary">Review</button></Link> : 'Plz pay'
        //     }

        // </div>

        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={order.image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{order.productName}</h2>
                <p>Total Order Product: {order.qtn}</p>
                <p>Total Price: ${order.price}</p>
                <div class="card-actions">
                    {
                        (order.price && order.paid) ? <Link to="/dashboard/myreview"><button class="btn font-bold text-white btn-info">Review</button></Link> : <span className='text-xl mt-2'>Please pay</span>
                    }
                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button class="btn text-white font-bold btn-info ">Pay</button></Link>}
                    {(order.price && order.paid) && <span class="text-xl mt-2">Paid</span>}
                </div>

            </div>
        </div>
    );
};

export default Order;