import React from 'react';
import NavbarComp from '../navbar/Navbar';
import FooterComp from '../footer/Footer';
import { GridContainer, HeadWrapper } from '../style/CampingPlaceStyle';
import placeContent from '../mock/campingPlace';
import { Link } from 'react-router-dom';


const CampingPlaceComp = () => {
  return (
    <div style={{background:' #FAFAFA'}}>
        <NavbarComp/>
        <HeadWrapper>
            <h5>Home / Camping place</h5>            
            <h1>Camping places</h1>
        </HeadWrapper>
        <GridContainer>{placeContent.map((item) => {
            return (              
                <div key={item.id}>      
                  <Link to='/campinplacemap' style={{textDecoration:'none'}}><img src={item.imgUrl} alt="Camping Place" /></Link>
                  <h3>{item.place}</h3>
                  <p>{item.location}</p>                        
                </div>              
            )
          })}
        </GridContainer>
        <FooterComp/>
    </div>
  )
}

export default CampingPlaceComp;