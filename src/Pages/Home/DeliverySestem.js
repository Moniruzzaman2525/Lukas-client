import React from 'react';

const DeliverySestem = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mx-5 mt-20'>
            <div className='flex mx-auto'>
                <div className='mr-5'>
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/icons/icon-1.png" alt="" />
                </div>
                <div className=''>
                    <h2 className='text-2xl mb-2'>Free Home Delivery</h2>
                    <p>Provide free home delivery <br /> for all product over $100</p>
                </div>
            </div>
            <div className='flex mx-auto'>
                <div className='mr-5'>
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/icons/icon-2.png" alt="" />
                </div>
                <div>
                    <h2 className='text-2xl mb-2'>Quality Products</h2>
                    <p>We ensure our product <br /> quality all times</p>
                </div>
            </div>
            <div className='flex mx-auto'>
                <div className='mr-5'>
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/icons/icon-3.png" alt="" />
                </div>
                <div>
                    <h2 className='text-2xl mb-2'>Online Support</h2>
                    <p>To satisfy our customer we <br /> try to give support online</p>
                </div>
            </div>
        </div>
    );
};

export default DeliverySestem;