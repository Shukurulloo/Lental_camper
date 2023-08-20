import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import { FormGroup, SideBarStyle } from '../Sidebar/Sidebar.style';


export default function CarouselAccordion() {
  return (

      

      <Accordion  sx={{background: "#fff", marginBottom:'20px', boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ fontSize:'30px', "& :hover": {color:'red', Size:'400px', background:'#006DAB', }}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{
            color: 'var(--text, #373737',
            fontFamily: 'Montserrat',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: ' normal' /* 18px */}}>Choose a model</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ }}>
        <Typography>
          <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">르노마스터</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">포터</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">봉고</label>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" name="brand" />
                <label htmlFor="">이베코 뉴데일리</label>
              </FormGroup>
          </Typography>
          </AccordionDetails>
      </Accordion>

  );
}