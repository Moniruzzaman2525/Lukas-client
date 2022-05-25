import React from 'react';

const PurchaseBanner = () => {
    return (
        <div class="mx-auto">
            <img src={service.image} class="max-w-sm mx-auto rounded-lg shadow-2xl" alt='' />
            <div>
                <h2 className="text-2xl">Hello, {user.displayName}</h2>
                <h1 class="text-5xl font-bold uppercase">{service.name}</h1>
                <p class="py-2">Price: ${service.price}</p>
                <p>InStock: {service.inStock}</p>
                <p>Minimum Quantity: {service.mnQuantity}</p>
                <div className="mb-6">
                    <input type="text" name='orderQuantity' id="text" className="uppercase shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Order' required />
                </div>
            </div>
        </div>
    );
};

export default PurchaseBanner;