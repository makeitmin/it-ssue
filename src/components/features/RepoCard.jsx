import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styled from 'styled-components';

const RepoCard = ({ title }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 50 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Title>{title}</Title>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over
        </Typography>
      </CardContent>
    </Card>
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

export default RepoCard;
