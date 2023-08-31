import React, { useState } from 'react'

import Sidebar from '../Sidebar/Sidebar'
import MotorComponents from '../pages/MotorComp'
import YHcontroller from './YHcontrollaer'
import FooterComp from '../footer/Footer'

const Motorpage = () => {
  const [active, setActive] = useState(true)  
  return (
    <div style={{background:' #FAFAFA'}}>
     
        <MotorComponents onClick={(state)=>{
            setActive(state)
        } }/>
        <div style={{display:'flex', padding:'0 70px'}}>
          <div style={{flex:'1', }}>
            <Sidebar/>  
          </div>
          <div style={{flex:'4', marginLeft:'30px'}}>
            <YHcontroller active={active}/>
          </div>
        </div>
        <FooterComp/>
    </div>
  )
}

export default Motorpage