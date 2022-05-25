import React, { useEffect, useState } from 'react';
import GetReview from './GetReview';


const ReviewCard = () => {
    const [reviews, setReviews] = useState([])
    const copyReview = [...reviews]
    const reverseReview = copyReview?.reverse()
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div data-aos="flip-up" className='ml-20 mr-20 grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
            {
                reverseReview?.map(r => <GetReview
                    key={r._id}
                    r={r}
                ></GetReview>)
            }
        </div>
    );
};

export default ReviewCard;