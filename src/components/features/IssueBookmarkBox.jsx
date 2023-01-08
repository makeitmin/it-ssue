import React from 'react';

import { CardActions, Grid, Typography } from '@mui/material';

import useBookmarkStore from '../../store/useBookmarkStore';

import RepoCard from './RepoCard';

const IssueBookmarkBox = ({ setTargetRepo }) => {
  const { userBookmarks } = useBookmarkStore(state => state);
  return (
    <Grid
      container
      direction="row"
      style={{ overflowX: 'auto', width: '100%', whiteSpace: 'nowrap' }}
    >
      {userBookmarks.length > 0 ? (
        userBookmarks.map((bm, idx) => {
          return (
            <Grid item key={bm.id} style={{ maxWidth: 'calc(100%/4)' }}>
              <CardActions onClick={() => setTargetRepo(bm.full_name)}>
                <RepoCard details={bm} />
              </CardActions>
            </Grid>
          );
        })
      ) : (
        <Typography>빈배열</Typography>
      )}
    </Grid>
  );
};

export default IssueBookmarkBox;
