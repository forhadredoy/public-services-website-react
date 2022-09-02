import React, { useState } from 'react';
import Home from './Home.module.css';


function Home1() {
    const[text,setText] =useState('')
    const[text1,setText1] =useState('')
    return (
        <div className={Home.intro}>
            <div className={Home.container}>

               
                
                <form>
                <select value={text1}  onChange={(e)=>setText1(e.target.value)}>
                 <option value="Dhaka">Dhaka</option>
                 <option value="Rajsahi">Rajsahi</option>
                 <option value="Khulna">chattgaram</option> 
                 <option value="Khulna">Cumilla</option>
                 <option value="Khulna">Sylet</option>
                 <option value="Khulna">Khulna</option>
                 <option value="Khulna">barishal</option>

                </select>

                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Search doctor,Hospital,Specality or Treatment"/>
                </form>

            </div>
    
            
        </div>
    );
}

export default Home1;