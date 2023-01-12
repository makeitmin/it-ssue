import React, { useRef, useState } from 'react';

import { Container, Box, Grid, Stack } from '@mui/material';

import ExpansionPanel from '../components/features/ExpansionPanel';
import NavBar from '../components/features/NavBar';
import SearchBookmarkBox from '../components/features/SearchBookmarkBox';
import SearchInputBox from '../components/features/SearchInputBox';
import SearchResultBox from '../components/features/SearchResultBox';
import { ResponsiveBox } from '../components/styles/Cards';
import { Header2, Paragraph3 } from '../components/styles/Texts';
import useBookmarkStore from '../store/useBookmarkStore';
import { useRepoStore } from '../store/useRepoStore';

/* 검색 페이지 */
const Search = () => {
  const { repos } = useRepoStore(state => state);
  const { userBookmarks } = useBookmarkStore(state => state);

  /* useRef - 검색된 Repository 각각에 할당 */
  const repoRefs = useRef([]);
  repoRefs.current = [];

  const [keyword, setKeyword] = useState(''); // 레포지토리 검색 키워드
  const [page, setPage] = useState(1); // 무한스크롤 페이지

  return (
    <Container maxWidth="lg" style={{ height: '100vh' }}>
      <NavBar />
      <ResponsiveBox>
        <Stack spacing={10}>
          <Box
            style={{
              width: '100%',
              justifyContent: 'center',
            }}
          >
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
                <SearchInputBox
                  keyword={keyword}
                  setKeyword={setKeyword}
                  page={page}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            style={{
              width: '100%',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <ExpansionPanel title={'내 북마크'}>
                  {userBookmarks.length > 0 ? (
                    <SearchBookmarkBox repoRefs={repoRefs} />
                  ) : (
                    <Paragraph3>북마크가 없습니다.</Paragraph3>
                  )}
                </ExpansionPanel>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={9}
                lg={9}
                xl={9}
                style={{ minHeight: '50vh' }}
              >
                <Header2>검색 결과</Header2>
                <Box>
                  {repos.length > 0 ? (
                    <SearchResultBox
                      repoRefs={repoRefs}
                      keyword={keyword}
                      page={page}
                      setPage={setPage}
                    />
                  ) : (
                    <Paragraph3>검색결과가 없습니다.</Paragraph3>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </ResponsiveBox>
    </Container>
  );
};

export default Search;
