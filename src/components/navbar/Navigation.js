import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from './Nav.module.css';


function Navigation() {

  const [showMediaIcons,setShowMediaIcons] =useState(false)

  const handleClick =()=>{
    setShowMediaIcons(!showMediaIcons)

  }

  
    return (
        
    <div className={Nav.main}>
      
      <div className={Nav.container}>
           <div className={Nav.menubar}>
           <li onClick={handleClick} className={Nav.bar}><FontAwesomeIcon icon={faBars}/></li>
           </div>
                 
            <ul className={showMediaIcons ?Nav.menulink : Nav.menu}>
               

                <li className={Nav.item}><Link to="/home" className={Nav.home}>Home</Link>
                </li>
                <li className={Nav.item}>
                <Link to="/about" className={Nav.messages}>About Us</Link>
                </li>
                <li className={Nav.item}>
                <Link to="/departments" className={Nav.orders}>Departments</Link>
                </li>
                <li className={Nav.item}>
                <Link to="/doctor" className={Nav.orders}>Doctor</Link>
                </li>
                <li className={Nav.item}>
                <Link to="/blog" className={Nav.orders}>Blog</Link>
                </li>
                <li className={Nav.item}>
                <Link to="/contact" className={Nav.orders}>Contact</Link>
                </li>
                <li className={Nav.item}>
                <Link to="/signup"className={Nav.cart}>Signup</Link>
                </li>
            </ul>
        
        <div className="content">
        <Outlet />
      </div>
            
      </div>
    </div>
    );
}

export default Navigation;