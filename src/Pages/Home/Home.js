import React from 'react';
import Bannar from './Bannar';
import Business from './Business';
import Contact from './Contact';
import DeliverySestem from './DeliverySestem';
import Extra from './Extra';
import ReviewSlider from './ReviewSlider';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <DeliverySestem />
            <Services></Services>
            <Extra></Extra>
            <Business></Business>
            <Contact></Contact>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default Home;