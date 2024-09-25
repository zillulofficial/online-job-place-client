import React from 'react';
import Banner from '../Banner/Banner';
import Sponsors from '../Sponsors/Sponsors';
import PopularServices from '../PopularServices/PopularServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsors></Sponsors>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;