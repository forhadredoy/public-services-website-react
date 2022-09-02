import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import general from '../img/general.jpg';
import ortho from '../img/ortho.jpg';
import pedi from '../img/pediatrician.jpg';
import phy from '../img/phy.jpg';
import thera from '../img/Thera.jpg';
import Home from './Home.module.css';

function Home4() {
    return (


     <div className={Home.intro4}>
       <div className={Home.container5}>
       <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 "
          src={general}
          alt="This is shoes"
        />
         <Carousel.Caption>
          <h3>General Surgeon</h3>
          <p>Need to get operated ? find the right Surgeon</p>
        </Carousel.Caption>
     
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 "
          src={ortho}
          alt="This is leptop"
        />
              <Carousel.Caption>
          <h3>orthopedist</h3>
          <p>For bone and joints issues,Spinal inguries and more</p>
        </Carousel.Caption>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={pedi}
          alt="this is Joursey"
        />

        <Carousel.Caption>
          <h3>Pediatrician</h3>
          <p>Child specialist and Doctor for infant</p>
        </Carousel.Caption>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={phy}
          alt="this is Joursey"
        />

        <Carousel.Caption>
          <h3>general physician</h3>
          <p>Find the right family doctor in your neighboorhood</p>
        </Carousel.Caption>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={thera}
          alt="this is Joursey"
        />

        <Carousel.Caption>
          <h3>Physiotherapist</h3>
          <p>Pulled a music?Get it treated by a trained Physiotherapist</p>
        </Carousel.Caption>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
            
     </div>
       
    );
}

export default Home4;