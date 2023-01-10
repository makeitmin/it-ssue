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
import { Header3, Paragraph2 } from '../styles/Texts';

const IssueCard = ({ details }) => {
  return (
    <ShadowCard>
      <CardActionArea
        href={`${details.html_url}`}
        target="_blank"
        rel="noreferrer"
      >
        <CardContent style={{ minHeight: '100px' }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: '12px' }}
          >
            <TitleBox>
              <Paragraph2>{details.full_name}</Paragraph2>
            </TitleBox>
            <TitleBox>
              <Header3>{details.title}</Header3>
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
