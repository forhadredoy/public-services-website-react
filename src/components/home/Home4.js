
import React from 'react';
import one from '../img/01.png';
import two from '../img/02.png';
import three from '../img/03.png';
import four from '../img/04.png';
import five from '../img/05.png';
import six from '../img/06.png';
import Home from './Home.module.css';

function Home4() {
    return (
      <div className={Home.main}>
        <div className={Home.text1}>
        <h1 className={Home.header3}> Our Departments</h1>
         <div className={Home. container3}>


        <div className={Home.item3}>
          <img src={one}/>
          <h1>Ginecology</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
           </p>


        </div>


        <div className={Home.item3}>
          <img src={two}/>
          <h1>Pediatrics</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
           </p>


        </div>


        <div className={Home.item3}>
          <img src={three}/>
          <h1>Ophthalmology</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
           </p>


        </div>

        <div className={Home.item3}>
          <img src={four}/>
          <h1>Neurology</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
           </p>


        </div>


        <div className={Home.item3}>
          <img src={five}/>
          <h1>Odontology</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
           </p>


        </div>



        <div className={Home.item3}>
          <img src={six}/>
          <h1>Laboratory</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
           </p>


        </div>





      </div>
      <div className={Home.button4}>
      <button>See All Department</button>

      </div>
      

      </div>
      </div>
     


  
       
    );
}

export default Home4;