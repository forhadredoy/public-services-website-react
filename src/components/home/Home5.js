import React from 'react';
import eight from '../img/08.jpg';
import Home from './Home.module.css';


function Home5() {
    return (
        <div className={Home.container4}>


            <div className={Home.item4} >
                <img src={eight}/>

            </div>



            <div className={Home.item5}>
                <h1>Why Choose US</h1>
                
                <div className={Home.unitem}>
                <div className={Home.element}>
                    <h2><span>01</span></h2>
                    <h1>Qualified Doctors</h1>
                    <p>Lorem ipsum dolor sit amet consect rutrum dignissim et neque id.</p>

                </div>

                <div className={Home.element}>
                    <h2>02</h2>
                    <h1>Emergency 24/7</h1>
                    <p>Lorem ipsum dolor sit amet consect rutrum dignissim et neque id.</p>

                </div>


                <div className={Home.element}>
                    <h2>03</h2>
                    <h1> Technology</h1>
                    <p>Lorem ipsum dolor sit amet consect rutrum dignissim et neque id.</p>

                </div>


                <div className={Home.element}>
                    <h2>04</h2>
                    <h1>Pharmacy</h1>
                    <p>Lorem ipsum dolor sit amet consect rutrum dignissim et neque id.</p>

                </div>


                </div>

              
            </div>

            

        </div>
    );
}

export default Home5;