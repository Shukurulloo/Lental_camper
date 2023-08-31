import React from 'react'
import { Button, GridContainer, GridItems } from '../style/MotorComponentsStyle';
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import carData from '../mock/data';



const HMenuComp = () => {
  return (
    <GridContainer>{carData.slice(0, 20).map((item) => {
        return (
          
            <GridItems key={item.id}>      
              <img src={item.photo} alt="campingCar" />
              <div style={{fontWeight:'700' }}>{item.name}</div>
              <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>{item.company} </div>
              <span><FaStar style={{ color: "#f9a826" }}/>5.3</span>
              </div>
              <h2 style={{color:'#435a68'}}>{item.cost}</h2>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <Button wd='7vw' hgt='35px' br='10px' bg='transparent' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Order</Button>
                <Link to={`/carinfo/${item.id}`}  style={{textDecoration:'none'}}>
                  <Button wd='7vw' hgt='35px' br='10px' bg='transparent' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Detail</Button>
                </Link>
              </div>
      
            </GridItems>
          
        )
      })}
      </GridContainer>
  )
}

export default HMenuComp