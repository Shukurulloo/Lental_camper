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
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%',height:'px', background:'#e0e5e8' }}>
      <div style={{width:'1px', width:'1566px', background:''}}>
        <Slider {...settings}>
            
          <img src={simplephoto} alt="" style={{width:'100%', height:'1066px',}} />
        

          <img src={simplephoto2} alt="" style={{width:'100%',height:'566px'}} />
          

          <img src={simplephoto} alt="" style={{width:'100%', height:'566px'}}/>
          
     
        </Slider>
      </div>
      </div>
    );
  }
}