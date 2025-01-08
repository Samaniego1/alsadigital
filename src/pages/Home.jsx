import React from 'react';
import Slide from '../components/Slide';
import { ArrowUpLeft } from 'phosphor-react';

const Home = () => {
    return (
        <div className='home-styled'>
            <div className='title'>
                <h1>Reserva tu cupo!</h1>
                <span><ArrowUpLeft size={29} />Colección</span>
            </div>
            <Slide />
        </div>
    );
} 
export default Home;