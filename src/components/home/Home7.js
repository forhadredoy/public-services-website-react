import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css';


function Home7({src}) {
    
    return (

       
             <div className='mycard'>
               
            
            <img
            src={src}
           
      
      className="image"
    />
        
            <FontAwesomeIcon icon={faClock} className="font30"/><span className='span22'>10 Days ago</span>
            <h3> psum passages, and more recently </h3>
            
        </div>
    )

    }

export default Home7;