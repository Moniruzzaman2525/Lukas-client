import React from 'react';
import { BsFlag } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineUnsubscribe } from 'react-icons/md';

const Business = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-5xl uppercase'>Millions business trust us</h2>
            <p className='text-center text-xl uppercase'>try to understand users expectation</p>
            <div className='grid md:grid-cols-4 my-20'>
                <div className='mx-auto'>
                    <h2 className='text-7xl mb-5'><BsFlag></BsFlag></h2>
                    <h2 className='text-5xl mb-2'>75</h2>
                    <h3 className='text-xl'>Countries</h3>
                </div>
                <div className='mx-auto'>
                    <h2 className='text-7xl mb-5'><MdOutlineUnsubscribe></MdOutlineUnsubscribe></h2>
                    <h2 className='text-5xl mb-2'>52k+</h2>
                    <h3 className='text-xl'>Subscriber</h3>
                </div>
                <div className='mx-auto'>
                    <h2 className='text-7xl mb-5'><IoIosPeople></IoIosPeople></h2>
                    <h2 className='text-5xl mb-2'>65k+</h2>
                    <h3 className='text-xl'>Happy Client</h3>
                </div>
                <div className='mx-auto'>
                    <h1 className='text-7xl mb-5'><BiLike></BiLike></h1>
                    <h2 className='text-5xl mb-2'>658k+</h2>
                    <h3 className='text-xl'>Feedback</h3>
                </div>
            </div>
        </div>
    );
};

export default Business;