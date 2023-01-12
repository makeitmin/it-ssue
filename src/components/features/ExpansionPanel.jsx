import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import styled from 'styled-components';

import { Header2 } from '../styles/Texts';

/* Collapse & Expand 컴포넌트 */
const ExpansionPanel = ({ title, children }) => {
  return (
    <PlainAccordion defaultExpanded>
      <PlainAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Header2>{title}</Header2>
      </PlainAccordionSummary>
      <PlainAccordionDetails>{children}</PlainAccordionDetails>
    </PlainAccordion>
  );
};

/* 컴포넌트 커스텀 */
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
