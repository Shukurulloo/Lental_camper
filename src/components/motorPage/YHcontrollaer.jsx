import React from 'react'
import HMenuComp from './Hmenu'
import YMenuComp from './Ymenu'


const YHcontroller = ({active}) => {

  return (
    <div>
        {active ?  <HMenuComp/>
        : <YMenuComp/>}
    </div>
  )
}

export default YHcontroller