import React from 'react';
import Banner from '../Banner/Banner';
import Sponsors from '../Sponsors/Sponsors';
import PopularServices from '../PopularServices/PopularServices';
import AboutUs from '../AboutUs/AboutUs';
import TabCategories from '../TabCategories/TabCategories';
import Preview from '../Preview/Preview';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsors></Sponsors>
            <TabCategories></TabCategories>
            <PopularServices></PopularServices>
            <AboutUs></AboutUs>
            <Preview></Preview>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;