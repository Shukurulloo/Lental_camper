import React from 'react'
import NavbarComp from '../navbar/Navbar'
import FooterComp from '../footer/Footer'
import { AddressWrap, ContainerMap, LocationWrap, WrapImg } from '../style/CampimgPlace.mapStyle'
import placeContent from '../mock/campingPlace'
import { GrLocation } from "react-icons/gr";
import { HiOutlinePhone } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import { VscHome } from "react-icons/vsc";

const CampinPlaceMap = () => {
  return (
        <ContainerMap>
            <NavbarComp/> 
                <WrapImg>
                {placeContent.slice(0,6).map((item) => {
                            return (
                                <div >
                                    <img src={item.imgUrl} alt="" style={{width:'95%', borderRadius:'10px' }} />
                                </div>
                            )
                        })}
                </WrapImg>
            <LocationWrap>
            <h1>Camping Del Sole Village</h1>
                 <div className='borderBottom'> 
                    <h4>Location</h4> 
                 <button>Copy map</button>
                 </div>
            <AddressWrap>
            <div style={{display:'flex'}}>
                <div className='left'>
                    <div style={{display:'flex'}}>
                        <GrLocation/>  <h3> Korea, Seul</h3>
                    </div>

                    <div style={{display:'flex'}}>
                        <HiOutlinePhone/> <h3>005- 862 -8569</h3>
                    </div>
                        </div>
                <div className='right'>
                    <div style={{display:'flex'}}>
                        <MdAccessTime/> <h3>From <span style={{ color:'#FF7A00'}}> 11:00</span>to <span style={{ color:'#FF7A00'}}>19:00</span></h3>
                        </div>
                        <div><VscHome/> <a href="/logo.com" style={{textDecoration:'none'}}>logo.com</a></div>
                </div>
            </div>
            </AddressWrap>
            </LocationWrap>
            <FooterComp/>
        </ContainerMap>
  )
}

export default CampinPlaceMap