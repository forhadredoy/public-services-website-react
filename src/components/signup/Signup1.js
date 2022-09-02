import React, { useState } from 'react';
import Signup from './Signup.module.css';

function Signup1(){
    const [text,setText] =useState("")
    const [text1,setText1] =useState("")
   const  handleSubmit =(event)=>{

         event.preventDefault();
    alert(text,text1)

    }
   
    return (
        <div  className={Signup.intro}>
            <div className={Signup.container}>
                <form onSubmit={handleSubmit}> 
                    <label>Gmail/User Name</label>
                    <input type="gmail" value={text} onChange={(e)=>setText(e.target.value)} className={Signup.input1}/>

                    <label>Password</label>
                    <input type="password" value={text1} onChange={(e)=>setText1(e.target.value)} className={Signup.input1}/>

                    <input type="submit" disabled={!text || !text1} className={Signup.btn}/>
                </form>

            </div>
            
        </div>
    );
}

export default Signup1;