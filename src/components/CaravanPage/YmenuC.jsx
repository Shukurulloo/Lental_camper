import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { Button } from '../style/MotorComponentsStyle'
import {Flex, FlexLeft, FlexMid, FlexRight,GridList } from '../motorPage/YmenuStyle'
import caravanData from '../mock/caravanData'


const YMenuComp = () => {
  return (
    <GridList>{caravanData.slice(0, 8).map((item) => {
      return (
        <Flex>
          <FlexRight>
            <img src={item.photo} alt="" width='80%' />
          </FlexRight>
          <FlexMid>
            <h2>{item.name}</h2>
            <p>{item.company}</p>
            <Button wd='100%' hgt='43px' br='10px' bg='transparent' mrg='60px 0 0 0' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Order</Button>
                
          </FlexMid>
          <FlexLeft>
            <h2>{item.cost}</h2>
            <span><FaStar style={{ color: "#f9a826" }}/>5.3</span>
            <Link to={`/carinfo/${item.id}`}  style={{textDecoration:'none'}}>
              <Button wd='100%' hgt='43px' br='10px' bg='transparent'  mrg='60px 0 0 0' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Detail</Button>
            </Link>
          </FlexLeft>
        </Flex>
      )
    })}
      

    </GridList>
  )
}

export default YMenuComp