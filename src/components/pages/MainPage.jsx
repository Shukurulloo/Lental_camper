import React from 'react'
import NavbarComp from '../navbar/Navbar'
import FooterComp from '../footer/Footer'
import { BlogsWrap, ContainerMain, ImgWrapper, LoremWrapLeft, LoremWrapRight, VideosWrap } from '../style/MainPageStyle'
import SimpleSlider from '../assets/slides/CaruselApp'
import vidImg1 from '../assets/img/Rectangle 14videos.png'
import vidImg2 from '../assets/img/Rectangle 15videos2.png'
import vidImg3 from '../assets/img/Rectangle 16videos3.png'
import vidImg4 from '../assets/img/Rectangle 17videos4.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from 'infinite-react-carousel';
import simplephoto from '../assets/img/Rectangle2camperimg.png';
import simplephoto2 from '../assets/img/Rectangle 2photo1.png';
import MiniCarousel from '../MiniCarousel/MiniCarousel'
import PopUpMain from '../popup/popup'







const MainPage = () => {
  return (
    <ContainerMain>
        <NavbarComp/>
        {/* <Slider/> */}
        <Fade bottom> <div style={{width:'100%'}}><SimpleSlider/></div></Fade>
       <ImgWrapper>
       <h4>Recommend</h4>
      <MiniCarousel/>
        </ImgWrapper> 
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', width:'100%', paddingTop:'70px'}}>
          <h2>Videos</h2>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', width:'100%',padding:'50px'}} >
      
      =
        <VideosWrap >
        <Fade bottom >
              <PopUpMain imgSrc={vidImg1} />
              <PopUpMain imgSrc={vidImg2} />
              <PopUpMain imgSrc={vidImg3} />
              <PopUpMain imgSrc={vidImg4} />
              

              <PopUpMain imgSrc={vidImg1} />
              <PopUpMain imgSrc={vidImg2} />
              <PopUpMain imgSrc={vidImg3} />
              <PopUpMain imgSrc={vidImg4} />
              </Fade>
            </VideosWrap>
        
        </div>
        <BlogsWrap  >
        <Zoom > 
        <h2>Blogs</h2>
        <div style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'center ', padding:'50px'}}>
        <LoremWrapLeft>
          <h1>Lorem ipsum</h1>
          <p className='red'>@Lorem ipsum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat platea mauris at turpis. Volutpat, morbi sit vitae id. Aliquam eleifend aenean neque in in a quam vivamus</p>
        </LoremWrapLeft>

        <LoremWrapRight >
        <VideosWrap pdleft='0px' gridrw='repeat(, 100%)' gridcl='repeat(3, 1fr)'  >
              <PopUpMain imgSrc={vidImg1} />
              <PopUpMain imgSrc={vidImg3} />
              <PopUpMain imgSrc={vidImg4} />

              <PopUpMain imgSrc={vidImg1} />
              <PopUpMain imgSrc={vidImg3} />
              <PopUpMain imgSrc={vidImg4} />
            </VideosWrap>
          </LoremWrapRight>
          </div>
          </Zoom>
        </BlogsWrap>
    
        </div>
        <FooterComp/>
        </ContainerMain>
  )
}

export default MainPage