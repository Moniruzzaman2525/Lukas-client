import React from 'react';
import { BsFlag } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineUnsubscribe } from 'react-icons/md';

const Business = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-5xl uppercase'>Millions business <span className='text-success'>trust us</span></h2>
            <p className='text-center text-xl uppercase mt-3'>try to understand users expectation</p>
            <div className='grid md:grid-cols-4 my-20'>
                <div className='mx-auto mb-10'>
                    <h2 className='text-7xl mb-5 text-success'><BsFlag></BsFlag></h2>
                    <h2 className='text-5xl mb-2'>75</h2>
                    <h3 className='text-xl text-success'>Countries</h3>
                </div>
                <div className='mx-auto mb-10'>
                    <h2 className='text-7xl mb-5 text-success'><MdOutlineUnsubscribe></MdOutlineUnsubscribe></h2>
                    <h2 className='text-5xl mb-2'>52k+</h2>
                    <h3 className='text-xl text-success'>Subscriber</h3>
                </div>
                <div className='mx-auto mb-10'>
                    <h2 className='text-7xl mb-5 text-success'><IoIosPeople></IoIosPeople></h2>
                    <h2 className='text-5xl mb-2'>65k+</h2>
                    <h3 className='text-xl text-success'>Happy Client</h3>
                </div>
                <div className='mx-auto mb-10'>
                    <h1 className='text-7xl mb-5 text-success'><BiLike></BiLike></h1>
                    <h2 className='text-5xl mb-2'>658k+</h2>
                    <h3 className='text-xl text-success'>Feedback</h3>
                </div>
            </div>
        </div>
    );
};

export default Business;