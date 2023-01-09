import React from 'react';

import { Container, Box, Grid, Stack } from '@mui/material';
import styled from 'styled-components';

import NavBar from '../components/features/NavBar';
import SearchBookmarkBox from '../components/features/SearchBookmarkBox';
import SearchInputBox from '../components/features/SearchInputBox';
import SearchResultBox from '../components/features/SearchResultBox';

/*
  검색 페이지
*/

const Search = () => {
  return (
    <Container>
      <Stack spacing={5}>
        <NavBar />
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
              <SearchInputBox />
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
              <SearchBookmarkBox />
            </Grid>

            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <HeaderText>검색 결과</HeaderText>
              <SearchResultBox />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

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
