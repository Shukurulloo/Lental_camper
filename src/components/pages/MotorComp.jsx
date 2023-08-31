import React, { useState } from 'react';
import { Flex, HeadWrapper, ItemBar, MainWrap, Row, SideBar, Text }  from '../style/MotorComponentsStyle';
import { FaThLarge, FaThList } from 'react-icons/fa';
import carData from '../mock/data';
import NavbarComp from '../navbar/Navbar'
import FooterComp from '../footer/Footer'




const MotorComponents = ({onClick}) => {
  const [on, setOn] = useState(true)
  // const [active, setActive] = useState(true)
  

  // console.log(active)
  console.log(on)

  console.log(carData)



  return (
    <div style={{background:' #FAFAFA'}}>
      <NavbarComp/>
      <HeadWrapper>
        <h5>Home / Motors</h5>
        <h3>Our ranges</h3>
        <h1>Motors</h1>
      </HeadWrapper>
      <MainWrap>
        <SideBar>
          
            <Text>Cost of car</Text>
            
        </SideBar>
        <ItemBar>
          <Row>
            <Flex left>
            <div>Item: <span style={{color:'blue'}}>{carData.length}</span></div>
            </Flex>
            <Flex right>
              <label htmlFor="">Sort by</label>
              <select name="" id="" style={{marginLeft:'10px', width:'227px', height:'30px' }}>
                <option value="">Select</option>
              </select>
              <select name="" id="" style={{margin:'0px 15px', width:'80px', height:'30px'}}>
                <option value="">60</option>
              </select>
              <div style={{borderRadius: '5px 0px 0px 5px', border:'1px solid rgba(55, 55, 55, 0.30)', padding:'4px 9px'}} active={on} onClick={()=>{
                      // setActive(true);
                      onClick(true); 
                      setOn(true)}} >
                        <FaThLarge/></div>

              <div style={{borderRadius: '0px 5px 5px 0px', border:'1px solid rgba(55, 55, 55, 0.30)', padding:'4px 9px'}} active={!on} onClick={()=>{
                      // setActive(false);
                      onClick(false); 
                      setOn(false)}}><FaThList style={{color:'grey'}}/></div>
            </Flex>
          </Row>
          {/* <HMenuComp active={on}/> */}
          {/* <YMenuComp active={!on}/> */}
          {/* <YHcontroller active={active}/> */}

        </ItemBar>
      </MainWrap>
      
    </div>
  )
}

export default MotorComponents