import React from 'react';
import Bannar from './Bannar';
import DeliverySestem from './DeliverySestem';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <DeliverySestem />
            <Services></Services>
        </div>
    );
};

export default Home;