import React, { useState } from 'react';
import { Motorcontainer } from './MotorCompIcon.style';
import { BsFillGridFill } from "react-icons/bs";
import carData from '../mock/data';
import { Link } from 'react-router-dom';
import { FaStar, FaThLarge, FaThList } from 'react-icons/fa';
import { Button, Flex, GridItems, Row } from '../style/MotorComponentsStyle';

const WrapMotor = () => {
  const [viewType, setViewType] = useState('grid'); // State yaratish
  
  const handleListView = () => {
    setViewType('list'); // ListView ni tanlash
  };

  const handleGridView = () => {
    setViewType('grid'); // GridView ni tanlash
  };

  return (
    <Motorcontainer>


      <div id="btnContainer" style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'space-between'}}>
        {/* onClick eventlari orqali funksiyalarni chaqirish */}



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
        
            </Flex>
          </Row>
        <div style={{display:'flex'}}>
        <button className={`btn ${viewType === 'list' ? 'active' : ''}`} onClick={handleListView}>

          <i className="fa fa-bars"></i><BsFillGridFill/>
        </button>
        <button className={`btn ${viewType === 'grid' ? 'active' : ''}`} onClick={handleGridView}>
          <i className="fa fa-th-large"></i>
         
 
          
          
           <FaThList/>
        </button>   
        </div>
      </div>

      {/* Ma'lumotlarni chiqarish */}
      <div className="row">
        {viewType === 'list' ? (
          <>
           <div className="column" style={{display:'flex', flexDirection:'column', backgroundColor: '#aaa', width: '100%' }}>
  {carData.map((item) => (
    <GridItems key={item.id}>      
      <img src={item.photo} alt="campingCar" />
      <div style={{fontWeight:'700' }}>{item.name}</div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>{item.company}</div>
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
  ))}
</div>

            <div className="column" style={{ backgroundColor: '#bbb', width: '100%' }}>
              <h2>Column 2</h2>
              <p>Some text..</p>
            </div>
          </>
        ) : (
          <>
            <div className="column" style={{ backgroundColor: '#aaa', width: '50%' }}>
              <h2>Column 1</h2>
              <p>Some text..</p>
            </div>
            <div className="column" style={{ backgroundColor: '#bbb', width: '50%' }}>
              <h2>Column 2</h2>
              <p>Some text..</p>
            </div>
          </>
        )}
      </div>
    </Motorcontainer>
  );
};

export default WrapMotor;
