import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import { FormGroup, SideBarStyle } from './Sidebar.style';

export default function SidebarAccordion() {
  return (
    <SideBarStyle>
      <Accordion sx={{background: "#FAFAFA",marginBottom:'20px',  boxShadow:'none' ,  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ fontSize:'30px', "& :hover": {color:'red', Size:'400px', background:'#006DAB', }}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{}}
        >
          <Typography sx={{
            background: "#FAFAFA",
            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '100%' ,/* 18px */
            border:'none'
          }}>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{height:'184px'}}>
          <Typography sx={{}}>
          <FormGroup>
                <input type="checkbox" name="brand" style={{borderRadius:'120px'  }} />
                <label htmlFor="">Aidal</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">Knal</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">escape</label>
              </FormGroup>                
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion sx={{background: "#FAFAFA",marginBottom:'20px', boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ fontSize:'30px', "& :hover": {color:'red', Size:'400px', background:'#006DAB', }}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '100%' /* 18px */}}>Company</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{height:'184px'}}>
          <Typography>
          <FormGroup>
                <input type="checkbox" name="brand"  />
                <label htmlFor="">escape</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">Aidal</label>
              </FormGroup> 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  sx={{background: "#FAFAFA", marginBottom:'20px', boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ fontSize:'30px', "& :hover": {color:'red', Size:'400px', background:'#006DAB', }}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{
            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '100%' /* 18px */}}>License type</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{height:'184px'}}>
        <Typography>
          <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">1 year</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">2 year</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">1.5 year</label>
              </FormGroup>   
          </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion  sx={{background: "#FAFAFA", marginBottom:'20px', boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ fontSize:'30px', "& :hover": {color:'red', Size:'400px', background:'#006DAB', }}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{
            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '100%' /* 18px */}}>Number of travelers</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{height:'184px'}}>
        <Typography>
          <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">2</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">3-4</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">5+</label>
              </FormGroup>   
          </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion  sx={{background: "#FAFAFA", marginBottom:'20px', boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ fontSize:'30px', "& :hover": {color:'red', Size:'400px', background:'#006DAB', }}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{
            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '100%' /* 18px */}}>Location</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{height:'184px', }}>
        <Typography>
          <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">Seoul</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">Korea</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">Pusan</label>
              </FormGroup>  
          </Typography>
          </AccordionDetails>
      </Accordion>
      </SideBarStyle>
  );
}