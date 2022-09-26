import React from 'react';
import ReactCardSlider from 'react-card-slider-component';
import Home from './Home.module.css';

function Home7() {
    const slides = [
        {image:"../img/01.png/200/300", title:"Lumbar Therapy",description:"The standard chunk of Lorem Ipsum  (Read more)....." },
        {image:"../img/14.jpg/600/500",title:"Important of the knee",description:"The standard chunk of Lorem Ipsum    Read more.....",clickEvent:"sliderClick"},
        {image:"../img/15.jpg/700/600",title:"Joint exercise",description:"The standard chunk of Lorem Ipsum  (Read more).....",clickEvent:"sliderClick"},
        {image:"../img/16.jpg/500/400",title:"Hand meshuse",description:"The standard chunk of Lorem Ipsum   (Read more).....",clickEvent:"sliderClick"},
        {image:"../img/17.jpg/200/300",title:"Constant Check",description:"The standard chunk of Lorem Ipsum  (Read more).....",clickEvent:"sliderClick"},
        {image:"../img/18.jpg/800/700",title:"Early Stimulation",description:"The standard chunk of Lorem Ipsum   Read more.....",clickEvent:"sliderClick"},
        {image:"../img/20.jpg/300/400",title:"Joint of the ederly",description:"The standard chunk of Lorem Ipsum   (Read more).....",clickEvent:"sliderClick"}
    ]

  
   
  
    return (
        

      <div className={Home.container6}>
        <h1>News & Health Tips</h1>
        <div className={Home.item7}>
        <ReactCardSlider slides={slides} />
       

        </div>
        
            
        </div>
    );
}

export default Home7;