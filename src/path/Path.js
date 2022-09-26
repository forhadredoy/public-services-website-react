import React from 'react';
import {
    BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import About from '../components/about/About';
import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';
import Departments from '../components/departments/Departments';
import Doctor from '../components/doctor/Doctor';
import Home from '../components/home/Home';
import Navigation from '../components/navbar/Navigation.js';
import Signup from '../components/signup/Signup';

function Path() {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/departments' element={<Departments />} />
                    <Route path='/doctor' element={<Doctor/>} />
                    <Route path='/blog' element={<Blog/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/signup' element={<Signup/>} />

                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default Path;