import React from 'react';
import corona from '../img/corona.jpg';
import vege from '../img/vege.jpg';
import Home from './Home.module.css';

function Home5() {
    return (
        <div className={Home.intro5}> 
        <div className={Home.container6}>
            <h2>Read top articles from health experts</h2>
            <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
            <button>See all articles</button>

        </div>

        <div className={Home.container6}>
            <img src ={corona}/>
            <p>CORONA VIRUS</p>
            <h3>12 conrona virus myths and fact thats you should be aware of</h3>
            <p>Dr Diano Borgio</p>

            </div>
            

            <div className={Home.container6}>
                <img src={vege}/>
                <p>VITAMINS AND SUppLEMENTS</p>
                <h3>Eating right to build immunity Against cold and viral imfections</h3>
                <p>Dr diano borgio</p>
            

            </div>
            
        </div>
    );
}

export default Home5;