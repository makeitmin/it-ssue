import {
  Card,
  CardContent,
  Grid,
  Box,
  Chip,
  CardActionArea,
} from '@mui/material';
import styled from 'styled-components';

import { getTextColor } from '../../utils';

const IssueCard = ({ details }) => {
  return (
    <ShadowCard>
      <CardActionArea
        href={`${details.html_url}`}
        target="_blank"
        rel="noreferrer"
      >
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: '12px' }}
          >
            <TitleBox>
              <Sub>{details.full_name}</Sub>
            </TitleBox>
            <TitleBox>
              <Title>{details.title}</Title>
            </TitleBox>
          </Grid>
          <Box
            style={{
              whiteSpace: 'nowrap',
              overflowX: 'auto',
              width: '100%',
            }}
          >
            {details.labels.map((label, idx) => (
              <Chip
                key={label.id}
                label={`${label.name}`}
                size="small"
                style={{
                  marginRight: '8px',
                  backgroundColor: `#${label.color}`,
                  color: `${getTextColor(`#${label.color}`)}`,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </ShadowCard>
  );
};

const Title = styled('span')`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

const Sub = styled('span')`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

const TitleBox = styled(Box)`
  && {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: calc(100% - 24px);
  }
`;

const ShadowCard = styled(Card)`
  &&.MuiPaper-root {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 12px;
  }

  &&.MuiPaper-root .MuiButtonBase-root .MuiCardContent-root {
    padding: 8px 16px;
  }
`;

export default IssueCard;
