import { Card } from '@mui/material';
import styled from 'styled-components';

export const ShadowCard = styled(Card)`
  &&.MuiPaper-root {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  &&.MuiPaper-root .MuiCardContent-root {
    padding: 8px 16px;
  }
`;

export const PlainCard = styled(Card)`
  &&.MuiPaper-root {
    box-shadow: none;
    border: 1px solid #ECECEC;
    border-radius: 8px;
  &&.MuiPaper-root .MuiCardContent-root {
    padding: 8px 16px;
  }
`;
