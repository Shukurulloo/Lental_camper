import React from 'react'
import SidebarAccordion from './SidebarAc'
import { Button, Col, Form, Line, SideBarStyle, Text, WrCompare } from './Sidebar.style'
import SidImg1 from '../assets/img/Rectangle 705compareSidebar.png'





const Sidebar = () => {
  return (
   

<SideBarStyle>
          <Col cost>
            <Text>Cost of car</Text>
            <div style={{display:'flex', marginTop:'30px'}}>
              <div style={{display:'flex', flexDirection:'column'}}>
              <label htmlFor="">from</label>
              <input type="text" />
              </div>
              <div style={{display:'flex', flexDirection:'column', marginLeft:'25px'}}>
              <label htmlFor="">to</label>
              <input type="text" />
              </div>
            </div>
          </Col>
          <SidebarAccordion />
          <Button cnl>Cancel</Button>
          <Button srch bg='#006DAB' style={{marginLeft:'8px'}}>Search</Button>

          <WrCompare>
            <h4>Compare</h4>
            <div >
              <img src={SidImg1} alt="" />
              <img src={SidImg1} alt="" />
              <img src={SidImg1} alt="" />
            </div>
          </WrCompare>
        </SideBarStyle>
  )
}

export default Sidebar