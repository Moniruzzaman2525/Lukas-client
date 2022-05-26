import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Order from './Order';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()
    const email = user?.email;
    useEffect(() => {
        fetch(`https://cryptic-retreat-62396.herokuapp.com/order?email=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.send === 401) {
                    signOut();
                    localStorage.removeItem('accessToken')
                    navigate('/home')
                }
                return res.json()
            })
            .then(data => {

                setOrders(data)
            })
    }, [email]);

    // const handleCancel = id => {
    //     const proceed = window.confirm("Are You Sure Want To Delate!!")
    //     if (proceed) {
    //         const url = `https://cryptic-retreat-62396.herokuapp.com/delete/booking/${id}`
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => console.log('hello', data))
    //         const updateService = orders.filter(service => service._id !== id);
    //         setOrders(updateService);
    //         toast.success('Items Delate Successful')
    //     }
    // }
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            {
                orders?.map((order, index) => <Order order={order} key={index}></Order>)
            }
        </div>
    );
};

export default MyOrder;