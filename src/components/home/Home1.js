import React from 'react';
import Home from './Home.module.css';



function Home1() {
    return (
        <div className={Home.container}>
            <div className={Home.item}>
               <div className={Home.text}>
                <h1 className={Home.header}>Unic Hospital</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  </p>
                <div className={Home.btn}>
                    <button className={Home.button1}>DEPARTMENTS</button>
                    <button className={Home.button2}>OUR DOCTORS</button>
                </div>
               </div>

               

            </div>


            
        </div>
    );
}

export default Home1;