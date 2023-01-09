import { Card, CardContent, Grid, Box, Chip } from '@mui/material';
import styled from 'styled-components';

import BookmarkButton from './BookmarkButton';

const RepoCard = ({ details }) => {
  return (
    <ShadowCard>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ marginBottom: '12px' }}
        >
          <TitleBox>
            <Title>{details.full_name}</Title>
          </TitleBox>
          <BookmarkButton data={details} />
        </Grid>
        <Box
          style={{
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
  &&.MuiPaper-root .MuiCardContent-root {
    padding: 8px 16px;
  }
`;

export default RepoCard;
