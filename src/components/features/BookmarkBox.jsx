import React, { useEffect } from 'react';

import { Grid } from '@mui/material';

import useBookmarkStore from '../../store/useBookmarkStore';
import { getBookmarks } from '../../utils';

import RepoCard from './RepoCard';

const BookmarkBox = () => {
  const { userBookmarks, setUserBookmarks } = useBookmarkStore(state => state);

  useEffect(() => {
    setUserBookmarks(getBookmarks());
  }, []);

  return (
    <Grid
      container
      spacing={2}
      alignItems="stretch"
      style={{ maxHeight: '60vh', overflow: 'auto' }}
    >
      {userBookmarks
        ? userBookmarks.map((ub, idx) => (
            <Grid key={ub.id} item xs={12} sm={12} md={12} lg={12}>
              <RepoCard key={ub.id} details={ub} />
            </Grid>
          ))
        : ''}
    </Grid>
  );
};

export default BookmarkBox;
