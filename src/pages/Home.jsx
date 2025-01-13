// filepath: /home/samaniego10/code/alsadigital/src/pages/Home.jsx
import React from 'react';
import Slide from '../components/Slide';
import Banner from '../components/Banner';


const Home = () => {
    console.log('Home component rendered');
    return (
        <div className='home-styled'>
            <Banner />
            <Slide />
        </div>
    );
};

export default Home;