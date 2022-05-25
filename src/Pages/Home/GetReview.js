import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GetReview = ({ r }) => {
    const { rating } = r
    let myIcon;
    if (rating == 4) {
        myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
        </div>
    }
    else if (rating == 4.8) {
        myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStarHalfStroke}></FontAwesomeIcon>   </div>
    }
    else if (rating == 4.5) {
        myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStarHalfStroke}></FontAwesomeIcon>   </div>
    }
    else if (rating == 3) {
        myIcon = <>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>

        </>

    }
    else if (rating == 3.5) {
        myIcon = <>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStarHalfStroke}></FontAwesomeIcon>

        </>
    }

    else if (rating == 2) {
        myIcon = <>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>

        </>
    }
    else if (rating == 2.5) {
        myIcon = <>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStarHalfStroke}></FontAwesomeIcon>
        </>
    }

    else if (rating == 1) {
        myIcon = <>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>

        </>
    }
    else {
        myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
        </div>
    }


    return (
        <div>
            <div data-aos="flip-up" className="custom-shadow">

                <div className="flex items-center mt-10 p-5 ">

                    <div >
                        <h1 className='sp-style text-blue-900 font-bold'>{r.name}</h1>
                        <h1 className='opacity-10 text-primary'>Posted On 10th December,2021</h1>
                    </div>

                </div>
                <p className='text-center'> {myIcon}</p>
                <div>
                    <p className="pl-20 pt-5 pb-5">`{r.opinion}`</p>
                </div>

            </div>
        </div>
    );
};

export default GetReview;