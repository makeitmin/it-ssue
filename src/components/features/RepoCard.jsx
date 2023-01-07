import { Card, CardContent, Grid, Box, Chip } from '@mui/material';
import styled from 'styled-components';

import Bookmark from './Bookmark';

const RepoCard = ({ details }) => {
  return (
    <ShadowCard>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            style={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '80%',
            }}
          >
            <Title>{details.full_name}</Title>
          </Box>
          <Bookmark id={details.id} />
        </Grid>
        <Box
          style={{
            // textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflowX: 'auto',
            width: '100%',
          }}
        >
          {details.topics.map((topic, idx) => (
            <Chip
              key={topic}
              label={`${topic}`}
              size="small"
              style={{ marginRight: '8px' }}
            />
          ))}
        </Box>
      </CardContent>
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

const ShadowCard = styled(Card)`
  &&.MuiPaper-root {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;

export default RepoCard;
