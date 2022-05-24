import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [service, setService] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])



    const handleAddItems = async e => {
        e.preventDefault();
        const items = {
            email: user.email,
            image: service.image,
            userName: user.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value,
            productName: service.name
        }
        console.log(items);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        }

        )
            .then(res => res.json())
            .then(result => {
                navigate('/dashboard/myorder')
                console.log(result);
                e.target.reset();
                toast.success('Order Successfully')
            })
    }
    return (
        <div>
            <div>
                <div className='w-1/2 mx-auto mt-10 mb-10'>
                    <h1 className='text-3xl mb-5 text-center font-bold'>Please <span style={{ color: '#64B9B4' }}>Order</span></h1>
                    <form onSubmit={handleAddItems} className='w'>
                        <div className="mb-6">
                            <input type="text" value={user?.displayName} readOnly disabled id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <input type="text" value={user?.email} readOnly disabled id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <input type="text" value={service.name} readOnly disabled id="text" className="uppercase shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Products Name' required />
                        </div>
                        <div className="mb-6">
                            <input type="text" name='phone' id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your Phone Number' required />
                        </div>
                        <div className="mb-6">
                            <input type="text" name='address' id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your Address' required />
                        </div>
                        <button style={{ backgroundColor: '#64B9B4' }} type="submit" className="text-white font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order Now</button>
                    </form>
                </div>
            </div>
        </div>


        // <div class="hero min-h-screen bg-base-200">
        //     <div class="hero-content grid md:grid-cols-2">
        //         <img src={service.image} class="max-w-sm mx-auto rounded-lg shadow-2xl" alt='' />
        //         <div>
        //             <h1 class="text-5xl font-bold uppercase">{service.name}</h1>
        //             <p class="py-6">Price: ${service.price}</p>
        //             <p>InStock: {service.inStock}</p>
        //             <p>Minimum Quantity: {service.mnQuantity}</p>
        //             <p>Minimum Quantity: {service.description}</p>
        //             <Link to="/booking"><button class="btn btn-primary">Pay Now</button></Link>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Purchase;