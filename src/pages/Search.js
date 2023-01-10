import React, { useRef } from 'react';

import { Container, Box, Grid, Stack } from '@mui/material';

import ExpansionPanel from '../components/features/ExpansionPanel';
import NavBar from '../components/features/NavBar';
import SearchBookmarkBox from '../components/features/SearchBookmarkBox';
import SearchInputBox from '../components/features/SearchInputBox';
import SearchResultBox from '../components/features/SearchResultBox';
import { Header1 } from '../components/styles/Texts';

/* 검색 페이지 */
const Search = () => {
  /* useRef - 검색된 Repository 각각에 할당 */
  const repoRefs = useRef([]);
  repoRefs.current = [];

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
          <Grid
            container
            spacing={3}
            style={{ paddingRight: '12px', paddingLeft: '12px' }}
          >
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <ExpansionPanel title={'내 북마크'}>
                <SearchBookmarkBox repoRefs={repoRefs} />
              </ExpansionPanel>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Header1>검색 결과</Header1>
              <SearchResultBox repoRefs={repoRefs} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default Search;
