import React from 'react';
import one from '../img/21.png';
import two from '../img/22.png';
import three from '../img/23.png';
import four from '../img/24.png';
import five from '../img/25.png';
import Home from './Home.module.css';

function Home10() {
    return (
       <div className={Home.main6}>
        <h1 id={Home.math}>Others</h1>
         <div className={Home.container9}>
            

            <div className={Home.item10}>
                <img src={one}/>
                <h1>preventive</h1>

            </div>
            <div className={Home.item10} id={Home.medicating}>
                <img src={two}/>
                <h1>medicating</h1>

            </div>

            <div className={Home.item10} id={Home.salutary}>
                <img src={three}/>
                <h1>Salutary</h1>

            </div>
            <div className={Home.item10} id={Home.narcotic}>
                <img src={four}/>
                <h1>Narcotic</h1>

            </div>
            <div className={Home.item10} id={Home.tonic}>
                <img src={five}/>
                <h1>Tonic</h1>

            </div>
        
        
        
            
        </div>
       </div>
    );
}

export default Home10;