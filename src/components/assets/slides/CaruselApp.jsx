import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import simplephoto from '../img/Rectangle2camperimg.png';
import simplephoto2 from '../img/Rectangle 2photo1.png';
import simplephoto3 from '../img/best-camper-van-brands-reviews-luxe-digital.jpg.webp';

export default class SimpleSlider extends Component {
  render() {
    const settings = {    
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    return (
      
   
        <Slider {...settings}>
            
          <img src={simplephoto} alt="" style={{}} />
        

          <img src={simplephoto2} alt="" style={{}} />
          

          <img src={simplephoto} alt="" style={{}}/>
          
     
        </Slider>
    
     
    );
  }
}