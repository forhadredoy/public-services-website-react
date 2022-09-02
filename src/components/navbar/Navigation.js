import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet } from "react-router-dom";
import Nav from './Nav.module.css';

function navigation() {
    return (
        <div className={Nav.intro}>
            <div className={Nav.container}>
                

                <FontAwesomeIcon icon={faFacebook} className={Nav.font}/> <FontAwesomeIcon icon={faWhatsapp} className={Nav.font}/> <FontAwesomeIcon icon={faTwitter} className={Nav.font}/>

                <p>Gmail:forhadhridoy.43@gmail.com</p>
                <p className={Nav.para}><FontAwesomeIcon icon={faPhone}  className={Nav.font1}/>+1850859161</p>
            </div>
            
            <div className={Nav.navigation}>

        <nav className={Nav.navbar}>
            <ul>
                
                <li><Link to="/home" className={Nav.home}>Home</Link>
                </li>
                <li>
                <Link to="/services" className={Nav.messages}>Our Services </Link>
                </li>
                <li>
                <Link to="/appoitment" className={Nav.orders}>Doctors Appoitment</Link>
                </li>
                <li>
                <Link to="/signup"className={Nav.cart}>Signup</Link>
                </li>
            </ul>
        </nav>
        
        </div>
        <div className="content">
        <Outlet />
      </div>
            
        </div>
    );
}

export default navigation;