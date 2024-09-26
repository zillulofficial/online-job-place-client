import React from 'react';
import Banner from '../Banner/Banner';
import Sponsors from '../Sponsors/Sponsors';
import PopularServices from '../PopularServices/PopularServices';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsors></Sponsors>
            <PopularServices></PopularServices>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;