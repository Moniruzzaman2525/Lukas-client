import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth)

    const handleSubmit = e => {
        e.preventDefault();
        const email = user?.email
        const name = user?.displayName
        const rating = e.target.rating.value
        const opinion = e.target.opinion.value

        const review = { email, name, rating, opinion }
        console.log(review);
        if (rating > 5) {
            alert('Give rating from 1 to 5')
        }
        else if (rating <= 0) {
            alert("sorry!!Negative number can't be a rating")
        }
        else {
            fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data)
                    toast.success('Thanks For Your Valuable Feedback')
                })
        }
        e.target.reset()
    }
    return (
        <div>
            <h1 className="mt-5 font-bold text-blue-900 sp-style text-2xl">Give your valuable FeedBack</h1>

            <form className='m-10' onSubmit={handleSubmit}>

                <div className="mb-6">
                    <label>Name:</label>
                    <input value={user?.displayName} type="text" id="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>




                <div className="mb-6">
                    <label>Rating:</label>
                    <input type="number" id="text" name='rating' placeholder="give some rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>



                <div className="mb-6">
                    <label>Opinion:</label>
                    <textarea rows="5" cols="20" type="text" id="text" name='opinion' placeholder="we try to give you best service" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className='text-center'>
                    <input type="submit" className="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-1/5 w-1/2 px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800" value='Done' />
                </div>

            </form>
            <ToastContainer />
        </div>
    );
};

export default MyReview;