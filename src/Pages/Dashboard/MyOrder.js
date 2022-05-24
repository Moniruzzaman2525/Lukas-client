import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Order from './Order';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);

    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/order/${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email]);

    const handleCancel = id => {
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {
            const url = `http://localhost:5000/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateService = orders.filter(service => service._id !== id);
            setOrders(updateService);
            toast.success('Items Delate Successful')
        }
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Product Photo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <Order handleCancel={handleCancel} order={order} key={index}></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;