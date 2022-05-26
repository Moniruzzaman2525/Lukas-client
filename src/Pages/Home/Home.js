import React from 'react';
import useServices from '../../Hooks/useServices';
import Loading from '../../Shared/Loading';
import Bannar from './Bannar';
import Business from './Business';
import Contact from './Contact';
import DeliverySestem from './DeliverySestem';
import Extra from './Extra';
import ReviewSlider from './ReviewSlider';
import Services from './Services';

const Home = () => {
    const [services] = useServices([])
    return (
        <div>
            {
                services.length === 0 ?
                    <Loading></Loading> :
                    <div>
                        <Bannar></Bannar>
                        <DeliverySestem />
                        <Services></Services>
                        <Extra></Extra>
                        <Business></Business>
                        <Contact></Contact>
                        <ReviewSlider></ReviewSlider>
                    </div>
            }
        </div>
    );
};

export default Home;