import React from 'react';
import ten from '../img/101.jpg';
import one from "../img/102.jpg";
import two from '../img/103.jpg';
import three from '../img/104.jpg';
import six from '../img/106.jpg';
import four from '../img/107.jpg';
import seven from '../img/108.jpg';
import nine from '../img/110.jpg';
import eight from '../img/111.jpg';
import five from '../img/112.jpg';
import './Card.css';
import Home7 from './Home7';

function Home12() {
    
    let box =document.querySelector('.product-container')

    const handleClick = () =>{
        let width = box.clientWidth;
        box.scrollLeft =box.scrollLeft - width/2


    }

    const handleClick1 =()=>{
        let width = box.clientWidth;
        box.scrollLeft =box.scrollLeft + width/2


    }

    
    return (
        <div className='product-carousel'>
             <button className="prev" onClick={handleClick}><p> {"<"} </p></button>
            <button className="next" onClick={handleClick1}><p> {">"} </p></button>
          
           <div className='product-container'>
          <Home7 cardno ="1"   src={one}
      width="auto"
      height="465" inf="verline, Germany"/>
             <Home7 cardno ="1"   src={two}
      width="auto"
      height="465" inf ="Teta, France"/>
         <Home7 cardno ="1"   src={three}
      width="auto"
      height="465" inf="rel, Netherland"/>
         <Home7 cardno ="1"   src={four}
      width="auto"
      height="265" inf="mef, Spain"/>
         <Home7 cardno ="1"   src={five}
      width="auto"
      height="265" inf="hera, mongolia"/>
         <Home7 cardno ="1"   src={six}
      width="auto"
      height="265" inf= "yangcu,Chaina"/>
         <Home7 cardno ="1"   src={seven}
      width="auto"
      height="265"
      inf="herf ,Lahor"/>
         <Home7 cardno ="1"   src={eight}
      width="auto"
      height="265" inf = "Fera, UK"/>
         <Home7 cardno ="1"   src={nine}
      width="auto"
      height="265" inf= "Semera, USA"/>
         <Home7 cardno ="1"   src={ten}
      width="auto"
      height="265" inf = "herki, Japan"/>
        

           </div>
            
        </div>
    );
}

export default Home12;