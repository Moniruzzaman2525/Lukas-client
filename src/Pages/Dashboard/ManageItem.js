import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useServices from '../../Hooks/useServices';
import Loading from '../../Shared/Loading';
import Manage from '../ManageItem/Manage';

const ManageItem = () => {
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://cryptic-retreat-62396.herokuapp.com/booking')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    const url = 'https://cryptic-retreat-62396.herokuapp.com/booking'
    const { data: services, isLoading, refetch } = useQuery('services', () => fetch(url).then(res => res.json()))


    if (isLoading) {
        <Loading></Loading>
    }

    // const handleDelete = id => {
    //     const proceed = window.confirm("Are You Sure Want To Delate!!")
    //     if (proceed) {
    //         const url = `https://cryptic-retreat-62396.herokuapp.com/delete/booking/${id}`
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => console.log('hello', data))
    //         const updateService = services.filter(service => service._id !== id);
    //         setServices(updateService);
    //         toast.success('Items Delate Successful')
    //     }
    // }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services?.map((service, index) => <Manage refetch={refetch} index={index} service={service} key={index}></Manage>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;