import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ItemMini, MapLeft, Mapleft, QuestionsLeft, QuestionsRight, WrapItems, WrapLeft, WrapRight, Wrapper } from '../style/ItemReviews';
import carData from '../mock/data';
import { FaChevronDown  } from "react-icons/fa";
import { Button } from '../style/InfoStyle';
import chart from '../assets/img/chart.png'
import BasicAccordion from './Accordion';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ItemReviewsComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', background: 'rgba(0, 109, 171, 0.20)', padding:'0 100px 0' }}>

      <Tabs 
            value={value} 
            onChange={handleChange} 
            sx={{ 
              "& button": {
                color:'#373737',
               
                
                
            },
              "& button:hover": {color:'#FFF', background:'#006DAB'}
              
              }}>
          <Tab label="Item reviews" {...a11yProps(0)} />
          <Tab label="Q&A" {...a11yProps(1)} />
          <Tab label="FAQ" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <div style={{padding:'30px 60px'}} >
      <CustomTabPanel value={value} index={0}>
        <Wrapper>
          <h2>Premium Review <span style={{color:'#006DAB'}}>{carData.length}</span></h2>
          <select name="car" id="" style={{}} >  
          <option value="Best"  >Best</option>
          <option value="Best">Best</option>
          <option value="Best">Any</option>
          </select>
        </Wrapper>
        
        <WrapItems>{carData.slice(0, 6).map((item) => {
            return (
              
        <ItemMini key={item.id}> 
           
       <div style={{display:'flex'}}>
          <img src={item.photo} alt="campingCar" width="150px" height="100px"/>
          <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent: 'center', paddingLeft:'15px'}}>
            <h4>{item.company}</h4>
            <h3>{item.name}</h3>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      <div style={{marginRight:'70px'}}>
          <h5>ID:<span style={{color:"#373737", marginLeft:'7px'}}>{item.id}</span></h5>
          <h5>Date:<span style={{color:"#373737", marginLeft:'7px'}}>{item.date}</span></h5>
          <h5>Viewed:<span style={{color:"#373737", marginLeft:'7px'}}>{item.viewed}</span></h5>
        </div>
              </ItemMini>
            
            )
          })}
          </WrapItems>
      </CustomTabPanel>
      <CustomTabPanel  value={value} index={1} >
      <div style={{display:'flex'}}>
        <WrapLeft >
          <div className=''> 
          <p>Name</p>
           <h3>Question Lorem ipsum dolor sit amet ? </h3>
           </div> 

          <div className=''>
          <p>Name</p> 
           <h3>Question Lorem ipsum dolor sit amet ? </h3>
           </div> 

          <div className=''> 
          <p>Name</p>
           <h3>Question Lorem ipsum dolor sit amet ? </h3>
           </div> 

          <div className=''> 
          <p>Name</p>
           <h3>Question Lorem ipsum dolor sit amet ? </h3>
           </div> 

          <div className=''> 
          <p>Name</p>
           <h3>Question Lorem ipsum dolor sit amet ? </h3>
           </div> 

        </WrapLeft>

        <WrapRight>
        <div>
          <h1>Send a question</h1>
          <input type="text"  placeholder='Your name' style={{color:'red'}}/>
          <input type="email" placeholder='Your email'  />
          <textarea name="message" id=""  placeholder="Your question"></textarea> 
          <Button comp style={{backgroundColor:'#006DAB', color:'white', width:'85%', marginTop:'25px'}}>Send question</Button>
          </div>
        </WrapRight>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      <div style={{display:'flex'}}>
      <BasicAccordion />
      <WrapRight style={{marginLeft:'30px'}}>
        <div style={{height: '482px'}}>
          <h1>Send a question</h1>
          <input type="text"  placeholder='Your name' style={{color:'red'}}/>
          <input type="email" placeholder='Your email'  />
          <textarea name="message" id=""  placeholder="Your question"></textarea> 
          <Button comp style={{backgroundColor:'#006DAB', color:'white', width:'85%', marginTop:'25px'}}>Send question</Button>
          </div>
        </WrapRight>
        </div>

</CustomTabPanel>


      <CustomTabPanel value={value} index={3}>
        <div style={{display:'flex'}}>
      <MapLeft>
         <img src={chart} alt="" />
          
          <div style={{display:'flex', width:'92%', padding: '25px 0px 30px'}}> 
          <div className='left'>
            <p>Phone number:</p>
            <h4>+7 237 181 181<br/>
            +7 210 181 191</h4>
         
          </div>
          <div className='right'>
            <p>E-mail:</p>
            <h4>logo.uz</h4>
          </div>
          </div>
        </MapLeft>

      <QuestionsRight>
        <div >
          <h1>Have you got a question</h1>
          <input type="text"  placeholder='Your name' style={{color:'red'}}/>
          <input type="email" placeholder='Your email'  />
          <textarea name="message" id=""  placeholder="Your question"></textarea> 
          <Button comp style={{backgroundColor:'#006DAB', color:'white', width:'85%', marginTop:'25px'}}>Send question</Button>
          </div>
        </QuestionsRight>
        </div>
      </CustomTabPanel>
      </div>
    </Box>
  );
}