import React from 'react';
import bulding from '../img/bulding.jpg';
import Home from './Home.module.css';

function Home3() {
    return (
        <div className={Home.container2}>

            
            <div className={Home.item2}>

                <img src={bulding}/>
                
           </div>



           <div className={Home.item2}>
            <h2>
                Unic hospital

            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum.
            </p>

            <li> Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in.</li>

            <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in.</li>

            <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula.</li>
            
            <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices.</li>
            <div className={Home.button3}>
                <button id={Home.appo}>Appoitment</button>
                <button id={Home.time}>TimeTable</button>

            </div>


                </div>

      
        </div>
    );
}

export default Home3;