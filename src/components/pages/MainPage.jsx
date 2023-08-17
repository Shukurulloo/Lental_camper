import React from 'react'
import NavbarComp from '../navbar/Navbar'
import FooterComp from '../footer/Footer'
import { BlogsWrap, ContainerMain, ImgWrapper, LoremWrapLeft, LoremWrapRight, VideosWrap } from '../style/MainPageStyle'
import SimpleSlider from '../assets/slides/CaruselApp'
import vidImg1 from '../assets/img/Rectangle 14videos.png'
import vidImg2 from '../assets/img/Rectangle 15videos2.png'
import vidImg3 from '../assets/img/Rectangle 16videos3.png'
import vidImg4 from '../assets/img/Rectangle 17videos4.png'



const MainPage = () => {
  return (
    <ContainerMain>
        <NavbarComp/>
        <SimpleSlider/>
        <ImgWrapper>
        </ImgWrapper>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', width:'100%', paddingTop:'70px'}}>
          <h2>Videos</h2>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', width:'100%',padding:'50px'}} >
        <VideosWrap>
          <img src={ vidImg1}alt=""  style={{width:'100%'}}/>
          <img src={ vidImg2} alt="" />
          <img src={ vidImg3} alt="" />
          <img src={ vidImg4} alt="" />
          
          <img src={ vidImg1}alt="" />
          <img src={ vidImg2} alt="" />
          <img src={ vidImg3} alt="" />
          <img src={ vidImg4} alt="" />
          
        </VideosWrap>
        </div>
        <BlogsWrap>
        <h2>Blogs</h2>
        <div style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'center ', padding:'50px'}}>
        <LoremWrapLeft>
          <h1>Lorem ipsum</h1>
          <p className='red'>@Lorem ipsum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat platea mauris at turpis. Volutpat, morbi sit vitae id. Aliquam eleifend aenean neque in in a quam vivamus</p>
        </LoremWrapLeft>

        <LoremWrapRight>
        <VideosWrap  pdleft='0px' gridrw='repeat(, 100%)'  gridcl='repeat(3, 1fr)'>
          <img src={ vidImg1}alt="" style={{width:'100%'}}/>
          <img src={ vidImg3} alt="" style={{width:'100%'}}/>
          <img src={ vidImg4} alt="" style={{width:'100%'}} />

          <img src={ vidImg1}alt="" style={{width:'100%'}}/>
          <img src={ vidImg3} alt="" style={{width:'100%'}}/>
          <img src={ vidImg4} alt="" style={{width:'100%'}} /> 
          </VideosWrap>
          </LoremWrapRight>
          </div>
        </BlogsWrap>
        </div>
        <FooterComp/>
        </ContainerMain>
  )
}

export default MainPage