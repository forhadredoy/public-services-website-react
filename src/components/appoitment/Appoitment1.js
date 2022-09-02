import React from 'react';
import Appoitment from './Appoitment.module.css';

function Appoitment1() {
    return (
       <div className={Appoitment.main}>
        <h3>Appoiitment</h3>
         <div className={Appoitment.intro}>
          
          <div className={Appoitment.container}>

              <h3>24/6</h3>
              <p>saterday to thusday</p>
              <h3>Friday is offday</h3>

          </div>

          
      </div>
       </div>
    );
}

export default Appoitment1;