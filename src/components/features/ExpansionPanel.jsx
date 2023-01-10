import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import styled from 'styled-components';

import { Header1 } from '../styles/Texts';

const ExpansionPanel = ({ title, children }) => {
  return (
    <PlainAccordion>
      <PlainAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Header1>{title}</Header1>
      </PlainAccordionSummary>
      <PlainAccordionDetails>{children}</PlainAccordionDetails>
    </PlainAccordion>
  );
};

const PlainAccordion = styled(Accordion)`
  &&.MuiPaper-root {
    box-shadow: none;
  }
`;

const PlainAccordionSummary = styled(AccordionSummary)`
  &&.MuiAccordionSummary-root {
    min-height: 0px;
    padding: 0px;
    .MuiAccordionSummary-content {
      margin: 0px;
    }
  }
`;

const PlainAccordionDetails = styled(AccordionDetails)`
  && {
    padding: 0px;
    overflow: auto;
  }
`;

export default ExpansionPanel;
