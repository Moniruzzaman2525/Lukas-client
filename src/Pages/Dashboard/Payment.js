import React from 'react';
import { useQuery } from 'react-query';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1Nt7A2OHxh9T3RoGkTk5q0I6nzFRpjKdqwpp0hNrfd21jSGEtmdgL9LzoctQSJTyBb3kuTKPR1A2lX24vcitEh008Qh9HOIx');
const Payment = () => {
    const { id } = useParams();
    const url = `https://cryptic-retreat-62396.herokuapp.com/booking/booking/${id}`

    const { data: booked, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success uppercase font-bold">Hello, {booked.userName}</p>
                    <h2 class="card-title">Pay for: {booked.productName}</h2>
                    <p>Please Pay: {booked.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booked={booked} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;