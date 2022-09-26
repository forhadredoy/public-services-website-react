import { faCalendarDays, faPhone, faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Home from './Home.module.css';


function Home2() {
    return (
        <div className={Home.container1}>
            <div className={Home.item1}>
             <FontAwesomeIcon icon={faTruckMedical} className={Home.icon}/>
                <h3> Emergency 24/7</h3>
               <p>Emergency cases only:</p>
               <p>Emergency cases only:</p>
               <p>Surgery Room: 51 000 0000</p>
            </div>

              <div className={Home.item1} id={Home.item} >
              <FontAwesomeIcon icon={faCalendarDays} className={Home.icon}/>
               
                <h3> Scedule</h3>
                <p>Monday - Friday: 08:00 - 20:00</p>
               <p>Monday - Friday: 08:00 - 20:00:</p>
               <p>Sunday & Holidays: 09:00 - 15:00</p>

              </div>

              <div className={Home.item1} id={Home.tem}>
              <FontAwesomeIcon icon={faPhone} className={Home.icon}/>
                
                <h3> Call center</h3>
                <p> Appointment: 51 000 0000</p>
                <p>Laboratory: 51 01 000 0000</p>
                <p>Business: 51 000 0000</p>
                </div>

            
        </div>
    );
}

export default Home2;