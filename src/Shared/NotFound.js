import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex h-full items-center'>
            <div>
                <img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?size=626&ext=jpg&ga=GA1.2.2090978668.1652901003" alt="" />
            </div>
            <div className='mx-auto '>
                <h2 className='text-5xl'>PAGE NOT FOUND</h2>
                <Link to="/"><button className='btn mt-5 btn-info text-white font-bold'>Go to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;