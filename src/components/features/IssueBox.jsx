import React from 'react';

import { Grid, Pagination, Box } from '@mui/material';
import styled from 'styled-components';

import IssueCard from './IssueCard';

/* 모아보기 - 이슈 목록 영역 */
const IssueBox = ({ totalPageCount, issues, page, setPage }) => {
  return (
    <Box style={{ minHeight: '50vh', marginTop: '20px', position: 'relative' }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ width: '100%', rowGap: '16px' }}
      >
        {issues.length > 0
          ? issues.map((issue, idx) => {
              return (
                <Grid
                  item
                  style={{ padding: '0px 8px' }}
                  key={issue.node_id}
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  <IssueCard details={issue} />
                </Grid>
              );
            })
          : ''}
      </Grid>
      {issues.length > 0 ? (
        <ResponsivePagination
          count={totalPageCount}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      ) : (
        ''
      )}
    </Box>
  );
};

/* 커스텀 컴포넌트 */

const ResponsivePagination = styled(Pagination)`
  && {
    margin-top: 30px;
    position: absolute;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 900px) {
    && {
      width: 100%;
    }
  }
`;

export default IssueBox;
