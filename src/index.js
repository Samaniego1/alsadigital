import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const appRoot = ReactDOM.createRoot(document.getElementById('root'));
appRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
