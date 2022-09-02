import React from 'react';
import child from '../img/child.jpg';
import depression from '../img/depression.jpg';
import fever from '../img/fever.jpg';
import performace from '../img/performance.jpg';
import period from '../img/period.jpg';
import pimple from '../img/pimple.jpg';
import Home from './Home.module.css';

function Home3() {
    return (
        <div className={Home.main}>
        <h3>Consult top doctors online for any health concern</h3>
        <p>Private online consultations with verified doctors in all specialists</p>
        
        <div className={Home.intro3}>
            <div className={Home.container4}>
            
            <img src={period}/>
            <p>Period doubt or pregnancy</p>
            <button>CONSULT NOW</button>

            </div>

            <div className={Home.container4}>
            
            <img src={pimple}/>
            <p>Acne,pimple or sckin issues</p>
            <button>CONSULT NOW</button>

            </div>

            <div className={Home.container4}>
            
            <img src={performace}/>
            <p>Performance issue in bed</p>
            <button>CONSULT NOW</button>

            </div>

            <div className={Home.container4}>
            
            <img src={fever}/>
            <p>Cold ,cough or fever</p>
            <button>CONSULT NOW</button>

            </div>

            <div className={Home.container4}>
            
            <img src={child}/>
            <p>Child not felling well</p>
            <button>CONSULT NOW</button>

            </div>


            <div className={Home.container4}>
            
            <img src={depression}/>
            <p>depression and anexioty</p>
            <button>CONSULT NOW</button>

            </div>
            
            
           

            
        </div>
        </div>
    );
}

export default Home3;