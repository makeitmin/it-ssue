import React from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container, Box, Grid, Pagination, Stack } from '@mui/material';
import styled from 'styled-components';

import RepoCard from '../components/features/RepoCard';
import SearchBox from '../components/features/SearchBox';
import useResultStore from '../store/useResultStore';

/*
  검색 페이지
*/

const Search = () => {
  const { repos } = useResultStore(state => state);
  return (
    <Container>
      <Stack spacing={5}>
        <Box
          style={{
            width: '100%',
            height: '64px',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Box>
                <Logo>itssue</Logo>
              </Box>
            </Grid>
            <Grid item>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
              >
                <Box>
                  <MenuText>내 이슈 모아보기</MenuText>
                </Box>
                <Box>
                  <ChevronRightIcon />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ width: '100%', justifyContent: 'center' }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <SearchBox />
            </Grid>
          </Grid>
        </Box>
        <Box style={{ width: '100%', maxHeight: '100%' }}>
          <Grid
            container
            spacing={2}
            alignItems="stretch"
            style={{ overflow: 'auto' }}
          >
            {repos.map((repo, idx) => {
              console.log(repo);
              return (
                <Grid key={repo.id} item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <RepoCard title={repo.full_name} />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            style={{ overflow: 'auto' }}
          >
            <Pagination
              count={10}
              shape="rounded"
              style={{ position: 'absolute', bottom: 20 }}
            />
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

const Logo = styled('span')`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const MenuText = styled('span')`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

export default Search;
