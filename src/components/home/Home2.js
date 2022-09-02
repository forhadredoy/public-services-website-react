import React from 'react';
import confarence from '../img/confarence .jpg';
import find from '../img/find.jpg';
import labtest from '../img/labtest.jpg';
import medicine from '../img/medicine.jpg';
import surgary from '../img/sergery.jpg';
import Home from './Home.module.css';


function Home2() {
    return (
        <div className={Home.intro2}>
            <div className={Home.container3}>
                <img src={confarence}/>
                <h3> Instant Video ConSultation</h3>
                <p> Connect within 60 seconds</p>

            </div>

              <div className={Home.container3}>
                <img src={find}/>
                <h3> Find Doctor near You</h3>
                <p> Confirm Appoitment</p>

              </div>

              <div className={Home.container3}>
                <img src={medicine}/>
                <h3> Medicines</h3>
                <p> Essentials at your doorstep</p>

            </div>

              <div className={Home.container3}>
              <img src={labtest}/>
              <h3>Lab tests</h3>
              <p>Sample picup at your home</p>

            </div>

              <div className={Home.container3}>
                <img src={surgary}/>
                <h3>Surgeries</h3>
                <p>Safe and trusted Surgeries</p>

            </div>

            
        </div>
    );
}

export default Home2;