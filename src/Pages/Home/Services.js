import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useServices();
    const serviceLast = [...services].reverse();
    const homeServices = serviceLast.slice(0, 6)
    console.log(services);

    return (
        <div className='mt-20'>
            <h2 className='text-center text-3xl mb-5'>BEST <span className='text-success font-bold'>SELLER</span></h2>
            <h3 className='text-center text-xl mb-5'>All best seller product are now available for you and your can <br /> buy this product from here any time any where so sop now</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    homeServices.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;