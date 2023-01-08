import React from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container, Box, Grid, Stack } from '@mui/material';
import styled from 'styled-components';

import BookmarkBox from '../components/features/BookmarkBox';
import ResultBox from '../components/features/ResultBox';
import SearchBox from '../components/features/SearchBox';

/*
  검색 페이지
*/

const Search = () => {
  return (
    <Container>
      <Stack spacing={5}>
        <Box
          style={{
            width: '100%',
            height: '64px',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingRight: '12px',
            paddingLeft: '12px',
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
              md={5}
              lg={5}
              xl={5}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <SearchBox />
            </Grid>
          </Grid>
        </Box>
        <Box
          style={{
            width: '100%',
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <HeaderText>내 북마크</HeaderText>
              <BookmarkBox />
            </Grid>

            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <HeaderText>검색 결과</HeaderText>
              <ResultBox />
            </Grid>
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

const HeaderText = styled('span')`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-left: 12px;
`;

export default Search;
