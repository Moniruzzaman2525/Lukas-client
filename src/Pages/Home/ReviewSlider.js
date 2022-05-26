import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import loader from '../../../Assets/Images/smallLoader.gif'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import SingleReviews from "./SingleReview";

const ReviewSlider = () => {
    const [reviewes, setReviewes] = useState([]);
    useEffect(() => {
        fetch("https://cryptic-retreat-62396.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                setReviewes(data);
            });
    }, [])
    // console.log(reviewes);
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper">
                {
                    reviewes?.map(singleReview => <SwiperSlide key={singleReview._id}>
                        <SingleReviews
                            singleReview={singleReview}
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
}

export default ReviewSlider;