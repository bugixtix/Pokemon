import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import About_ from './coms/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact_ } from './coms/Contact_';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <div className='Index'>
    <Routes>
       <Route path='/home' exact element={<App />}/> 
       <Route path='/about' exact element={<About_ />}/> 
       <Route path='/contact' exact element={<Contact_ />}/> 

    </Routes>
    </div>
    </BrowserRouter>
);
