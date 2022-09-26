import React, { useState } from 'react';
import Home from './Home.module.css';

function Home9() {

    const [department, setDepartment] = useState("Department");
    const [dateValue, setDateValue] = useState(null); 
    const [time, setTime] = useState("");
    const [text1, setText1] = useState("");
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [checked, setChecked] = React.useState(false);
    

    const handleChange = (event) => {
        setDepartment(event.target.value)
      }
      const handleChange1 = (event) => {
        setDateValue(event.target.value)
      }
      const handleChange2 = (event) => {
        setTime(event.target.value)
      }
      const handleChange3 = (event) => {
        setText(event.target.value)
      }
      const handleChange4 = (event) => {
        setText1(event.target.value)
      }
      const handleChange5 = (event) => {
        setText2(event.target.value)
      }
  
        
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${text}`)
  }


    

    return (
        <div className={Home.container8}>
            <h1>Appoitment</h1>
            
            <div className={Home.item9}>
        
          <div className={Home.unitem3}>
          <div className={Home.element5}>
              <form className={Home.form} onSubmit={handleSubmit}>
                 <select value={department} onChange={handleChange} className={Home.select}>
        
        <option value="Department">Department</option>
           <option value="Volvo">General</option>
            <option value="Fiat">Ginecology</option>
            <option value="Fiat">Laboratory</option>
            <option value="Fiat">Pediatrics</option>
            <option value="Fiat">Neurology</option>
            <option value="Fiat">Ophthalmology</option>
            <option value="Fiat">Odontology</option>
            <option value="Fiat"></option>
      </select>
      <input type="Date" value={dateValue} onChange={handleChange1} className={Home.input} />

      <select value={time} onChange={handleChange2} className={Home.select}>
            <option value="Time">Time</option>
        <option value="eight">8:00</option>
           <option value="Volvo">9:00</option>
            <option value="Fiat">10:00</option>
            <option value="Fiat">11:00</option>
            <option value="Fiat">12:00</option>
            <option value="Fiat">1:00</option>
            <option value="Fiat">2:00</option>
            <option value="Fiat">3:00</option>
            <option value="Fiat">4:00</option>
            <option value="Fiat">5:00</option>
            <option value="Fiat">6:00</option>
      </select>

              
          
                        <input type="text" value={text} onChange={handleChange3} placeholder="Full Name " className={Home.input}/>
                        <input type="email" value={text1} onChange={handleChange4} placeholder="Email" className={Home.email}/>
                        <input type="text" value={text2} onChange={handleChange5} placeholder="Subject" className={Home.input}/>
              
                       

                        
                        <label>
                        <input type="checkbox"
                      defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                    id={Home.check}
                    className={Home.check}
                   
                        />
                        I agree with the Terms of Use and Privacy Policy
                        </label>
                        <input type="submit" value="Send Message" className={Home.button9} disabled={!text || !text1 || !text2 || !time || !department || !dateValue || !checked}/>

                        
                 </form>

                
              </div>

          </div>
                </div>

                


      
       
            
        </div>
    );
}

export default Home9;