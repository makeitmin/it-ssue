import React from 'react';

import { Grid } from '@mui/material';

import useBookmarkStore from '../../store/useBookmarkStore';

import RepoCard from './RepoCard';

/* 검색하기 -> 내 북마크 */
const SearchBookmarkBox = ({ repoRefs }) => {
  /* 북마크 배열 변수 (전역) */
  const { userBookmarks } = useBookmarkStore(state => state);

  return (
    <Grid container spacing={2} style={{ maxHeight: '60vh', overflow: 'auto' }}>
      {userBookmarks.map((ub, idx) => (
        <Grid key={ub.id} item xs={12} sm={12} md={12} lg={12}>
          <RepoCard key={ub.id} details={ub} refs={repoRefs} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchBookmarkBox;
