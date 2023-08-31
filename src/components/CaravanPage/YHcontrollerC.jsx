import React from 'react'
import HMenuComp from './HmenuC'
import YMenuComp from './YmenuC'


const YHcontroller = ({active}) => {

  return (
    <div>
        {active ?  <HMenuComp/>
        : <YMenuComp/>}
    </div>
  )
}

export default YHcontroller