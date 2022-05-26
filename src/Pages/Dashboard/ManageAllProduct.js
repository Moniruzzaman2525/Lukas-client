import React from 'react';
import { toast } from 'react-toastify';
import useServices from '../../Hooks/useServices';
import SingleService from './SingleService';

const ManageAllProduct = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {
            const url = `https://cryptic-retreat-62396.herokuapp.com/delete/services/${id}`
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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    services.map(service => <SingleService handleDelete={handleDelete} service={service} key={service._id}></SingleService>)
                }
            </div>
        </div>
    );
};

export default ManageAllProduct;