
import { faFacebook, faInstagram, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import nine from '../img/09.jpg';
import ten from '../img/10.jpg';
import eleven from '../img/11.jpg';
import Home from './Home.module.css';


function Home6() {
    return (


    <div className={Home.main4}>
      <h1>Our Doctors</h1>
       <div className={Home.card}>
       <div className={Home.container5}>
     
      <div className={Home.item6}>
      <img src={nine}/>
      <div className={Home.overlay}>
       <div className={Home.icon6}><FontAwesomeIcon icon={faFacebook} className={Home.icon7}/> <FontAwesomeIcon icon={faTwitter} className={Home.icon7}/> <FontAwesomeIcon icon={faInstagram} className={Home.icon7}/> <FontAwesomeIcon icon={faSkype} className={Home.icon7}/></div>
       </div>
       <div className={Home.text4}>
       <h4><b>Mickel Jon</b></h4> 
        <p>CEO and founder</p> 
       </div>
       
      </div>
      
    </div>    

    <div className={Home.container5}>

     
      <div className={Home.item6}>
      <img src={ten}/>
      <div className={Home.overlay}>
       <div className={Home.icon6}><FontAwesomeIcon icon={faFacebook} className={Home.icon7}/> <FontAwesomeIcon icon={faTwitter} className={Home.icon7}/> <FontAwesomeIcon icon={faInstagram} className={Home.icon7}/> <FontAwesomeIcon icon={faSkype} className={Home.icon7}/></div>
       </div>
       <div className={Home.text4}>
       <h4><b>Hilari Linkton</b></h4> 
        <p>Laboratorist</p> 

       </div>
       
      </div>
    </div>   

      <div className={Home.container5} id={Home.unic}>

      
      <div className={Home.item6}>
      <img src={eleven}/>
      <div className={Home.overlay}>
       <div className={Home.icon6}> <FontAwesomeIcon icon={faFacebook} className={Home.icon7}/> <FontAwesomeIcon icon={faTwitter} className={Home.icon7}/> <FontAwesomeIcon icon={faInstagram} className={Home.icon7}/> <FontAwesomeIcon icon={faSkype} className={Home.icon7}/></div>
       </div>
       <div className={Home.text4}>
       <h4><b>Hilari Linkton</b></h4> 
        <p>psycologist</p> 

       </div>
        
      </div>
    </div>   


     </div> 
     
     <div className={Home.button5}>
      <button id={Home.btn1}>All Doctors</button>
      <button id={Home.btn2}>TimeTable</button>
      </div>

     

    </div>
       
    );
}

export default Home6;