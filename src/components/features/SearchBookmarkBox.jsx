import React from 'react';

import { Stack } from '@mui/material';

import useBookmarkStore from '../../store/useBookmarkStore';

import RepoCard from './RepoCard';

/* 검색하기 -> 내 북마크 */
const SearchBookmarkBox = ({ repoRefs }) => {
  /* 북마크 배열 변수 (전역) */
  const { userBookmarks } = useBookmarkStore(state => state);

  return (
    <Stack
      spacing={2}
      style={{ maxHeight: '60vh', overflow: 'auto', marginTop: '20px' }}
    >
      {userBookmarks.map((ub, idx) => (
        <RepoCard key={ub.id} details={ub} refs={repoRefs} />
      ))}
    </Stack>
  );
};

export default SearchBookmarkBox;
