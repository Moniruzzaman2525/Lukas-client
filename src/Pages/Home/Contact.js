import React from 'react';
import contact from '../../image/contact.png'

const Contact = () => {
    return (
        <div style={{
            background: `url(${contact})`
        }} className="contact-section p-4 mx-20 relative">
            <div className='absolute text-center md:left-[15%] md:top-[15%]'>
                <h2 className='text-white text-xl mb-4 font-bold'>SPECIAL OFFER FOR SUBSCRIPTION</h2>
                <h2 className='text-white text-3xl mb-4'>GET INSTANT DISCOUNT FOR <br /> MEMBERSHIP</h2>
                <p className='text-white mb-4'>Subscribe our newsletter and all latest news of our <br />
                    latest product, promotion and offers</p>
                <input type="text" placeholder="Enter Your Email Here" class="input bg-black input-bordered input-warning w-full max-w-xs" />
                <button class="btn btn-secondary mt-4">submit</button>
            </div>
        </div>
    );
};

export default Contact;