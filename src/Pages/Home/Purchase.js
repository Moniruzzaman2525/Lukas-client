import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Purchase = () => {
    const [user, loading, userError] = useAuthState(auth);
    const { id } = useParams();
    const [service, setService] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [btnDisable, setBtnDisable] = useState(false);

    useEffect(() => {
        fetch(`https://cryptic-retreat-62396.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])


    if (loading) {
        return <Loading></Loading>
    }



    const handleBtn = (e) => {
        let qtn = parseInt(e.target.value);
        console.log(qtn);
        let productQtn = parseInt(service?.inStock);
        let inStockQuantity = parseInt(service?.mnQuantity)
        if (qtn > productQtn || qtn <= 100) {
            toast.error(`Quantity Can't leas then Minimum order ${service?.mnQuantity}`)
            setBtnDisable(true);
        }
        else if (qtn < inStockQuantity) {
            toast.error(`We don't have ${productQtn}`)
            setBtnDisable(true)
        }
        else {
            setBtnDisable(false);
        }

    }


    const handleAddItems = e => {
        e.preventDefault();
        let qtn = e.target.orderQuantity.value
        let pPrice = service?.price
        console.log(qtn, pPrice);
        const items = {
            email: user?.email,
            image: service?.image,
            price: qtn * pPrice,
            userName: user?.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value,
            productName: service?.name,
            qtn,
            // updatePrice
        }

        fetch('https://cryptic-retreat-62396.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        }

        )
            .then(res => res.json())
            .then(result => {
                // navigate('/dashboard/myorder')
                console.log(result);
                e.target.reset();
                toast.success('Order Successfully')
            })
        setError('')


    }
    return (
        <div>
            {
                service?.length === 0 ?
                    <Loading></Loading> :
                    <div className='py-20'>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className="mx-auto">
                                <img src={service.image} className="max-w-sm mx-auto rounded-lg shadow-2xl" alt='' />
                                <div className='mt-5'>
                                    <h2 className="text-2xl">Hello, <span className='font-bold text-success'>{user?.displayName}</span></h2>
                                    <h2 className='text-xl '>{user?.email}</h2>
                                    <h1 className="text-3xl font-bold uppercase">{service.name}</h1>
                                    <p className="py-2 text-xl font-bold">Price: ${service.price} <span className='font-normal'>(per piece)</span></p>
                                    <p className='text-xl'>InStock: {service.inStock}</p>
                                    <p className='text-xl font-semibold'>Minimum Order Quantity: <span className='text-red-500'>{service.mnQuantity}</span></p>

                                </div>
                            </div>
                            <div className='w-1/2 mx-auto mt-10 mb-10'>
                                <h1 className='text-3xl mb-5 text-center font-bold'>Please <span className='text-success'>Order</span></h1>
                                <form onSubmit={handleAddItems} className='w'>

                                    <div className="mb-6">
                                        <input type="text" value={service.name} readOnly disabled id="text" className="uppercase shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" required />
                                    </div>

                                    <div className="mb-6">
                                        <input type="text" name='phone' id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your Phone Number' required />
                                    </div>
                                    <div className="mb-6">
                                        <input type="text" onBlur={handleBtn} name='orderQuantity' id="text" className="uppercase shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Minimum Order' required />
                                    </div>
                                    <div className="mb-6">
                                        <input type="text" name='address' id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your Address' required />
                                    </div>
                                    <button disabled={btnDisable} type="submit" className="text-white bg-success uppercase font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order Now</button>
                                </form>
                            </div>
                            {
                                error && <p className='text-red-600'>{error}</p>
                            }


                        </div>
                    </div>

            }
        </div>
    );
};

export default Purchase;