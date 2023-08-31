import React from 'react'
import NavbarComp from '../navbar/Navbar'
import FooterComp from '../footer/Footer'
import { AddressWrap, ContainerMap, LocationWrap, WrapImg } from '../style/CampimgPlace.mapStyle'
import placeContent from '../mock/campingPlace'
import { HiOutlinePhone , HiOutlineLocationMarker} from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import Zoom from 'react-reveal/Zoom';
import KakaoMap from './kakaoMap'



const CampinPlaceMap = () => {
  return (
        <ContainerMap>
            <NavbarComp/> 
                <WrapImg> <Zoom>
                {placeContent.slice(0,6).map((item) => {
                            return (
                                <div >
                                    <img src={item.imgUrl} alt="" style={{width:'95%', borderRadius:'10px' }} />
                                </div>
                            )
                        })}
                        </Zoom>
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
                        <HiOutlineLocationMarker style={{color:'rgba(55, 55, 55, 0.70)', width:'20px', height:'20px'}}/>  <h3> Korea, Seul</h3>
                    </div>

                    <div style={{display:'flex',marginTop:'10px'}}>
                        <HiOutlinePhone style={{color:'rgba(55, 55, 55, 0.70)', width:'20px', height:'20px'}}/> <h3>005- 862 -8569</h3>
                    </div>
                        </div>
                <div className='right'>
                    <div style={{display:'flex'}}>
                        <MdAccessTime style={{color:'rgba(55, 55, 55, 0.70)', width:'20px', height:'20px'}}/> <h3>From <span style={{ color:'#FF7A00'}}> 11:00</span> to <span style={{ color:'#FF7A00'}}>19:00</span></h3>
                        </div>
                        <div style={{display:'flex', marginTop:'10px'}}><VscHome style={{color:'rgba(55, 55, 55, 0.70)', width:'20px', height:'20px'}}/> <a href="/logo.com" style={{textDecoration:'none'}}>logo.com</a></div>
                </div>
            </div>
            <h4>Description</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus inventore, illo dolorem officia molestias qui itaque iure deserunt quia?
                 Alias, quo esse error sequi dignissimos soluta hic ullam praesentium perferendis explicabo. Ducimus alias quo ipsam totam qui? 
                 Nemo numquam et dolor quidem eos vero, quibusdam optio voluptatum nesciunt, animi sit ea excepturi modi exercitationem explicabo, ipsa ullam accusamus.
                  Impedit pariatur facere maxime obcaecati? Cupiditate rerum, cumque quo autem quis iure, explicabo sed, alias iusto asperiores perspiciatis! Excepturi vero eum deserunt. 
                  Eos quasi harum veritatis, nostrum aspernatur maiores explicabo itaque sequi tempora numquam amet expedita molestias voluptatum obcaecati, sunt animi. Illo ipsa adipisci aspernatur. 
                 Mollitia commodi impedit, sit officiis esse quidem praesentium, ut at delectus ex, minima vero iure? Magnam, dolorum.</p>

              
            </AddressWrap>
          
            </LocationWrap>
            <KakaoMap/> 
            <div style={{marginTop:'90px'}}></div><FooterComp/>
        </ContainerMap>
  )
}

export default CampinPlaceMap