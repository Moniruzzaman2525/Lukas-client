import React from 'react';

const About = () => {
    return (
        <div className='my-10 container mx-auto'>
            <div className='flex my-16 justify-between'>
                <div className='flex-1 mx-10'>
                    <h2 className='text-4xl font-bold mb-5'>About Lukas</h2>
                    <p className='text-lg mb-5'>This is a list of automotive parts mostly for vehicles using internal combustion engines which are manufactured components of automobiles.</p>
                    <p className='text-lg mb-5'>This category is for components and parts that make up automobile (car) bodies including accessories.</p>
                    <p className='text-lg mb-5'>On motorbikes their main function is to shield the rider from wind, though not as completely as in a car, whereas on sports and racing motorcycles the main function is reducing drag when the rider</p>
                </div>
                <div className='flex-1'>
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/banner/a-1.jpg" alt="" />
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex-1'>
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/banner/a-2.jpg" alt="" />
                </div>
                <div className='flex-1 mx-10'>
                    <h2 className='text-4xl font-bold mb-5'>Our mission</h2>
                    <p className='text-lg mb-5'>This is a list of automotive parts mostly for vehicles using internal combustion engines which are manufactured components of automobiles.</p>
                    <p className='text-lg mb-5'>This category is for components and parts that make up automobile (car) bodies including accessories.</p>
                    <p className='text-lg mb-5'>On motorbikes their main function is to shield the rider from wind, though not as completely as in a car, whereas on sports and racing motorcycles the main function is reducing drag when the rider</p>
                </div>
            </div>
        </div>
    );
};

export default About;