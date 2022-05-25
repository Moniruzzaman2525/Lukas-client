import React from 'react';
import Bannar from './Bannar';
import Business from './Business';
import Contact from './Contact';
import DeliverySestem from './DeliverySestem';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <DeliverySestem />
            <Services></Services>
            <Business></Business>
            <Contact></Contact>
        </div>
    );
};

export default Home;