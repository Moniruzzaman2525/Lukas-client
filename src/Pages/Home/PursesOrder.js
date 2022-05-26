
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useParams } from 'react-router-dom';
// import PurchaseForm from './PurchaseForm';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../../firebase.init';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';

// const PursesOrder = () => {
//     const { id } = useParams();
//     const [tool, setTool] = useState({});
//     const { image, name, availableQuantity, price, details, minOrderQuantity, _id } = tool;
//     const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
//     const [quantity, setQuantity] = useState(minOrderQuantity);
//     const [user] = useAuthState(auth);

//     //handle quantity change
//     const handleQuantity = e => {
//         e.preventDefault();
//         const inputQuantity = e.target.quantity.value;
//         if (!inputQuantity) {
//             toast.error('Give the quantity value')
//         }
//         else if (inputQuantity > availableQuantity) {
//             toast.error(`Sorry ${user.displayName} !! 'We dont have enough quantity'`);
//         } else if (inputQuantity < minOrderQuantity) {
//             toast.error(`Sorry ${user.displayName} !!You have to order Minimum  quantity  ${minOrderQuantity}`);
//         } else {

//             setQuantity(inputQuantity)

//         }
//         e.target.reset()
//     }

//     //handle submit
//     const handleSubmitParam = (data, e) => {
//         const userName = user?.displayName;
//         const userInput = {
//             userName,
//             email: user?.email,
//             number: data?.number,
//             address: data?.address,
//             quantity: quantity,
//             price: quantity * price,
//             productName: name,
//             img: image,
//         }

//         console.log(userInput);
//         axios.post('https://cryptic-retreat-62396.herokuapp.com/booking', userInput)
//             .then(response => {
//                 const { data } = response;
//                 if (data.insertedId) {
//                     toast.success('Your order is booked')
//                     e.target.reset()
//                 }
//             })


//     }
//     useEffect(() => {
//         fetch(`https://cryptic-retreat-62396.herokuapp.com/services/${id}`)
//             .then(res => res.json())
//             .then(data => setTool(data))
//     }, [id])
//     return (
//         <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mb-20 py-16 mt-10">
//             <div className='md:w-1/2 md:px-10'>
//                 <figure><img className='w-2/3' src={image} alt="Album" /></figure>
//                 <h2 className="card-title">{name}</h2>
//                 <p>{details}</p>
//                 <p>Price: ${price}</p>
//                 <p>Stock: {availableQuantity}</p>
//                 <p>minimum-order: {minOrderQuantity}</p>
//                 <form onSubmit={handleQuantity}>
//                     <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered input-secondary w-full max-w-xs"
//                         required=""
//                     />
//                     <button type='submit' className=" text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Order</button>
//                 </form>
//             </div>

//             <div className="card-body">


//                 <PurchaseForm handleSubmitParam={handleSubmitParam} tool={tool} quantity={quantity}></PurchaseForm>

//             </div>

//         </div>
//     );
// };

// export default PursesOrder;