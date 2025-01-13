
import React from 'react';
import Home from './pages/Home';
import './styles/Global.scss';
import Navbar from './components/Navbar';

const App = () => {
    console.log('App component rendered');
    return (
        <>
            <Navbar />
            <Home />
        </>
    );
};

export default App;