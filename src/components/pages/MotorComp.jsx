import React from 'react';
import NavbarComp from '../navbar/Navbar';
import { Button, Col, Flex, Form, GridContainer, GridItems, HeadWrapper, ItemBar, Line, MainWrap, Row, SideBar, Text } from '../style/MotorComponentsStyle';
import carData from '../mock/data';
import { Link } from 'react-router-dom';
import { FaStar, FaThLarge, FaThList } from 'react-icons/fa';
import FooterComp from '../footer/Footer';




const MotorComponents = () => {
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
          <Col brand>
            <select name="" id="" style={{color: '#373737', fontWeight: '600', fontSize: '18px', border:'none', background:'transparent' }}>
              <option value="">Brand</option>
            </select>
            <Line></Line>    
            <Form>       
              <div className="form-group">
                <input type="checkbox" name="brand" style={{borderRadius:'120px'}} />
                <label htmlFor="">Aidal</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Knal</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">escape</label>
              </div>                
            </Form>                                 
          </Col>
          <Col company>
            <select name="" id="" style={{color: '#373737', fontWeight: '600', fontSize: '18px', border:'none', background:'transparent' }}>
              <option value="">Company</option>
            </select>
            <Line></Line>    
            <Form>       
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">escape</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Aidal</label>
              </div>                             
            </Form>                                 
          </Col>
          <Col license>
            <select name="" id="" style={{color: '#373737', fontWeight: '600', fontSize: '18px', border:'none', background:'transparent' }}>
              <option value="">License type</option>
            </select>
            <Line></Line>    
            <Form>       
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">1 year</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">2 year</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">1.5 year</label>
              </div>                
            </Form>                                 
          </Col>
          <Col travelers>
            <select name="" id="" style={{color: '#373737', fontWeight: '600', fontSize: '18px', border:'none', background:'transparent' }}>
              <option value="">Number of travelers</option>
            </select>
            <Line></Line>    
            <Form>       
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">2</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">3-4</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">5+</label>
              </div>                
            </Form>                                 
          </Col>
          <Col location>
            <select name="" id="" style={{color: '#373737', fontWeight: '600', fontSize: '18px', border:'none', background:'transparent' }}>
              <option value="">Location</option>
            </select>
            <Line></Line>    
            <Form>       
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Seoul</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Daegu</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Busan</label>
              </div>                
            </Form>                                 
          </Col>
          <Button cnl>Cancel</Button>
          <Button srch bg='#006DAB' style={{marginLeft:'8px'}}>Search</Button>
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
              <button style={{borderRadius: '5px 0px 0px 5px'}}><FaThLarge/></button>
              <button style={{borderRadius: '0px 5px 5px 0px'}}><FaThList style={{color:'grey'}}/></button>
            </Flex>
          </Row>
          <GridContainer>{carData.slice(0, 24).map((item) => {
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

export default MotorComponents