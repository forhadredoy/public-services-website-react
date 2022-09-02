import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Home from './Home.module.css';

function Home6() {
    return (
       <div className={Home.intro6}>
    


        <Carousel className={Home.container7}>

       
        <Carousel.Item interval={3000}>
            <h3>What Our Users Have to say</h3>
            <p>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          
       
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
       

       
        <Carousel.Item interval={3000}>
    
               
            <h3>What Our Users Have to say</h3>
            <p>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        


      
        <Carousel.Item interval={3000}>
       
  
         
            <h3>What Our Users Have to say</h3>
            <p>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
     
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item >
    
  
          <Carousel.Caption interval={500}>
            <h3>What Our Users Have to says</h3>
            <p>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </Carousel.Caption>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
         
        </div>
       
              
       
    );
}

export default Home6;