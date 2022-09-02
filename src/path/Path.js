import React from 'react';
import {
    BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import Appoitment from '../components/appoitment/Appoitment';
import Home from '../components/home/Home';
import Navbar from '../components/navbar/Navigation.js';
import Services from '../components/services/Services.js';
import Signup from '../components/signup/Signup';

function Path() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/appoitment' element={<Appoitment />} />
                    <Route path='/signup' element={<Signup />} />

                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default Path;