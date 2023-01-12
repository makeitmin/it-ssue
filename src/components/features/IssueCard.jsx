import CommentIcon from '@mui/icons-material/Comment';
import EventIcon from '@mui/icons-material/Event';
import {
  CardContent,
  Grid,
  Box,
  Chip,
  CardActionArea,
  Tooltip,
} from '@mui/material';
import moment from 'moment';
import styled from 'styled-components';

import { getTextColor } from '../../utils';
import { ShadowCard } from '../styles/Cards';
import { Header3, Paragraph2, Paragraph3 } from '../styles/Texts';

/* 개별 이슈 카드 컴포넌트 */
const IssueCard = ({ details }) => {
  return (
    <ShadowCard>
      <Tooltip title={details.title}>
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
              <OnelineBox>
                <Paragraph2>{details.full_name}</Paragraph2>
              </OnelineBox>
              <OnelineBox>
                <Header3>{details.title}</Header3>
              </OnelineBox>
            </Grid>
            <Box
              style={{
                marginBottom: '10px',
              }}
            >
              <Paragraph3 style={{ marginRight: '5px' }}>
                <CommentIcon
                  fontSize="10"
                  style={{ lineHeight: '14px', marginRight: '2px' }}
                />
                댓글 {details.comments}개
              </Paragraph3>
              <Paragraph3>
                <EventIcon
                  fontSize="10"
                  style={{ lineHeight: '14px', marginRight: '2px' }}
                />
                마지막 업데이트{' '}
                {moment(details.updated_at).format('YYYY-MM-DD')}
              </Paragraph3>
            </Box>
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
      </Tooltip>
    </ShadowCard>
  );
};

/* 커스텀 컴포넌트 */
const OnelineBox = styled(Box)`
  && {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: calc(100% - 24px);
  }
`;

export default IssueCard;
