import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleAddItems = async e => {
        e.preventDefault();
        const items = {
            name: e.target.name.value,
            price: e.target.price.value,
            inStock: e.target.inStock.value,
            mnQuantity: e.target.mnQuantity.value,
            description: e.target.description.value,
            image: e.target.image.value
        }
        axios.post("http://localhost:5000/add", items)
            .then(response => {
                console.log(response);
                e.target.reset();
                toast.success('Product Add SuccessFully')
            })
    }
    return (
        <div className='w-1/2 mx-auto mt-10 mb-10'>
            <h1 className='text-3xl mb-5 text-center font-bold'>Add To <span style={{ color: '#64B9B4' }}>Item</span></h1>
            <form onSubmit={handleAddItems} className='w'>
                {/* <div className="mb-6">
                    <input type="text" name='name' id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <input type="text" name='price' id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" required />
                </div> */}
                <div className="mb-6">
                    <input type="text" name='name' id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Products Name' required />
                </div>
                <div className="mb-6">
                    <input type="text" name='price' id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Price' required />
                </div>
                <div className="mb-6">
                    <input type="text" name='inStock' id="quantity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Add Stock' required />
                </div>
                <div className="mb-6">
                    <input type="text" name='mnQuantity' id="supplier-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Add Minimum Quantity' required />
                </div>
                <div className="mb-6">
                    <textarea id="message" name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-400  focus:border-teal-400  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400 " placeholder="Add Items Description..."></textarea>
                </div>
                <div className="mb-6">
                    <input type="text" name='image' id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400 dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Images Link' required />
                </div>
                <button style={{ backgroundColor: '#64B9B4' }} type="submit" className="text-white font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Item</button>
            </form>
        </div>
    );
};

export default AddProduct;