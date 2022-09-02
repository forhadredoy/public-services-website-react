import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services.module.css';

function Services1() {
    return (
        <div className={Services.intro}>
            <div className={Services.container}>
                <ul>
                    <li>
                        <Link to='./'>Tele Video consulting </Link>
                    </li>
                    <li>
                        <Link to='./'>Medical Loan</Link>
                    </li>
                    <li>
                        <Link to='./'>Book diagnostic Text</Link>
                    </li>
                </ul>
            </div>


            <div className={Services.container}>
                <ul>
                    <li>
                        <Link to='./'> Talk to medical expert</Link>
                    </li>
                    <li>
                        <Link to='./'>Treatment Cost</Link>
                    </li>
                    <li>
                        <Link to='./'> Second Opinion</Link>
                    </li>
                </ul>
            </div>


            <div className={Services.container}>
                <ul>
                    <li>
                        <Link to='./'> Home care</Link>
                    </li>
                    <li>
                        <Link to='./'>Order Medicine</Link>
                    </li>
                    <li>
                        <Link to='./'>Health Blog</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default Services1;