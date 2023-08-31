import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import YHcontroller from './YHcontrollerC'
import CaravanComponents from '../pages/CaravanComp'
import FooterComp from '../footer/Footer'


const Caravanpage = () => {
  const [active, setActive] = useState(true)  
  return (
    <div style={{background:' #FAFAFA'}}>
     
        <CaravanComponents onClick={(state)=>{
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

export default Caravanpage