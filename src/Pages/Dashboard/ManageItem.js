import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useServices from '../../Hooks/useServices';
import Manage from '../ManageItem/Manage';

const ManageItem = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {
            const url = `http://localhost:5000/delete/booking/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateService = services.filter(service => service._id !== id);
            setServices(updateService);
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
                            <th>Product Image</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service, index) => <Manage handleDelete={handleDelete} index={index} service={service} key={index}></Manage>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;