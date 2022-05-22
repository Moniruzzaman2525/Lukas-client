import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useServices();
    console.log(services);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;