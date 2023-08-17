import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { colors } from '@mui/material';

export default function BasicAccordion() {
  const accordionStyle = {
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '20px',
    
  };
  const accordionSummaryStyle = {
      height:'60px'
    // background: 'red',
   
  };

  return (
    <div style={{ width: '55%' }}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Accordion key={item} sx={accordionStyle}>
          <AccordionSummary
          sx={accordionSummaryStyle}
            expandIcon={<ExpandMoreIcon sx={{color:'#006DAB'}} />}

            
          >
            <Typography sx={{
                color: 'var(--text, #373737)',
                fontzFamily: 'Montserrat',
                fontSize: '17px',
                fontStyle: 'normal',
                fontWeight:' 600',
                lineHeight: 'normal',
                
            }}>Frequently asked questions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
