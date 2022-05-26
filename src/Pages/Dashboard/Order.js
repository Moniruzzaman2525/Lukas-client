import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order, handleDelete }) => {
    return (


        <div className="card w-96 bg-base-100 mx-auto shadow-xl">
            <figure className="px-10 pt-10">
                <img src={order.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{order.productName}</h2>
                <p>Total Order Product: {order.qtn}</p>
                <p>Total Price: ${order.price}</p>
                {
                    order.transactionId ? <p className='my-3 text-success'>Tr-Id: {order.transactionId}</p> : <span className='my-3 text-red-500'>Not Pay</span>
                }
                <div className="card-actions">
                    {
                        (order.price && order.paid) ? <Link to="/dashboard/myreview"><button className="btn font-bold text-white btn-success">Review</button></Link> : <span className='text-xl mt-2'>Please pay</span>
                    }
                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn text-white font-bold btn-success ">Payment</button></Link>}
                    {(order.price && order.paid) && <span className="text-xl mt-2">Paid</span>}
                </div>
                <div className="card-actions rounded-lg mt-5 border border-success">
                    {/* {
                        !order.paid && 
                    } */}
                    <button onClick={() => handleDelete(order._id)} disabled={order.paid} className="btn   btn-success text-white font-bold">cancelled</button>
                </div>

            </div>
        </div>
    );
};

export default Order;