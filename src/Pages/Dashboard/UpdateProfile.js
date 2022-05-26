import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const UpdateProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleAddItems = async e => {
        e.preventDefault();
        const items = {
            email: user?.email,
            name: user?.displayName,
            address: e.target.address.value,
            phone: e.target.phone.value,
            image: e.target.image.value,
            education: e.target.education.value,
            link: e.target.link.value,
            // img: e.target.img.value
        }
        axios.put("https://cryptic-retreat-62396.herokuapp.com/update", items)
            .then(response => {
                console.log(response);
                e.target.reset();
                toast.success('Your Profile Update is Done')
            })
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-1/2 mx-auto mt-10 mb-10'>
            <h1 className='text-3xl mb-5 text-center font-bold'>Update Your <span className='text-success'>Profile</span></h1>
            <form onSubmit={handleAddItems} className='w'>
                <div className="mb-6">
                    <input type="text" value={user?.displayName} readOnly disabled className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <input type="text" value={user?.email} readOnly disabled className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <input type="text" name='address' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your Address' required />
                </div>
                <div className="mb-6">
                    <input type="text" name='phone' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your Phone' required />
                </div>
                <div className="mb-6">
                    <input type="text" name='education' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Add Your Education' required />
                </div>
                <div className="mb-6">
                    <input type="text" name='link' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your Linked Profile Link' required />
                </div>
                <div className="mb-6">
                    <input type="text" name='image' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400  dark:shadow-sm-light" placeholder='Your image' required />
                </div>

                <button type="submit" className="text-white bg-success font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile;