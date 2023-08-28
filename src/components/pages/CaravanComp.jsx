import React, { useState } from 'react';
import NavbarComp from '../navbar/Navbar';
import { Button, Col, Flex, Form, GridContainer, GridItems, HeadWrapper, ItemBar, Line, MainWrap, Row,  Text } from '../style/MotorComponentsStyle';
import { Link } from 'react-router-dom';
import { FaStar, FaThLarge, FaThList } from 'react-icons/fa';
import FooterComp from '../footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import caravanData from '../mock/caravanData';




const CaravanComponents = () => {
  const [filteredData, setFilteredData] = useState(caravanData);
  const [isBrandChecked, setIsBrandChecked] = useState (false);
  const handleClick = ()=> {
    setIsBrandChecked(!isBrandChecked);
    if (!isBrandChecked) {
      const filteredCar = [...caravanData];
      const filteredCompany = filteredCar.filter((caravanData) =>
        caravanData.company.startsWith("다온티앤티")
        );
        setFilteredData(filteredCompany);
    }else{
      setFilteredData(...caravanData);
    }
  }
  console.log("filtered ompany ", filteredData)
  return (
    <div style={{background:' #FAFAFA'}}>
      <NavbarComp/>
      <HeadWrapper>
        <h5>Home / Caravan</h5>
        <h3>Our ranges</h3>
        <h1>Caravan</h1>
      </HeadWrapper>
      <MainWrap>
      <Sidebar />
        <ItemBar>
          <Row>
            
            <Flex left>
            <div>Item: <span style={{color:'blue'}}>{caravanData.length}</span></div>
            </Flex>
            <Flex right>
              <label htmlFor="">Sort by</label>
              <select name="" id="" style={{marginLeft:'10px', width:'227px', height:'30px' }}>
                <option value="">Select</option>
              </select>
              <select name="" id="" style={{margin:'0px 15px', width:'80px', height:'30px'}}>
                <option value="">60</option>
              </select>
              <button style={{borderRadius: '5px 0px 0px 5px'}}><FaThLarge/></button>
              <button style={{borderRadius: '0px 5px 5px 0px'}}><FaThList style={{color:'grey'}}/></button>
            </Flex>
          </Row>
          <GridContainer>{caravanData.slice(0, 24).map((item) => {
            return (
              
                <GridItems key={item.id}>      
                  <img src={item.photo} alt="campingCar" />
                  <div style={{fontWeight:'700' }}>{item.name}</div>
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div>{item.company} </div>
                  <span><FaStar style={{ color: "#f9a826" }}/>5.3</span>
                  </div>
                  <h2 style={{color:'#006DAB'}}>{item.cost}</h2>
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button wd='100px' hgt='35px' br='10px' bg='transparent' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Order</Button>
                    <Link to={`/info/${item.id}`}  style={{textDecoration:'none'}}>
                      <Button wd='100px' hgt='35px' br='10px' bg='transparent' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Detail</Button>
                    </Link>
                  </div>
            
                </GridItems>
              
            )
          })}
          </GridContainer>
        </ItemBar>
      </MainWrap>
      <FooterComp/>
    </div>
  )
}

export default CaravanComponents