import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import twentyone from '../img/21.jpg';
import Home from './Home.module.css';

function Home8() {
    return (
        <div className={Home.container7}>
            <h1>Our patient says</h1>
            <div className={Home.item8}>


                <div className={Home.element3}>
                    <img src={twentyone}/>
                    <h3>Meliza floers</h3>
                    <p>Patient</p>
                    
                </div>

                <div className={Home.element4}> 
                    
                    <p>psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <FontAwesomeIcon icon={faStar} className={Home.icon9}/><FontAwesomeIcon icon={faStar} className={Home.icon9}/><FontAwesomeIcon icon={faStar} className={Home.icon9}/><FontAwesomeIcon icon={faStar} className={Home.icon9}/><FontAwesomeIcon icon={faStar} className={Home.icon9}/>
                    
                </div>

            </div>
            <div className={Home.button7}>
                <button>
                    Prev
                </button>
                <button>
                    Next
                </button>

            </div>


            
        </div>
    );
}

export default Home8;