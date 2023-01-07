import React from 'react';

import { Grid } from '@mui/material';

import useResultStore from '../../store/useResultStore';

import RepoCard from './RepoCard';

const ResultBox = () => {
  const { repos } = useResultStore(state => state);

  return (
    <Grid
      container
      alignItems="stretch"
      style={{ maxHeight: '60vh', overflow: 'auto' }}
    >
      {repos.map((repo, idx) => {
        return (
          <Grid key={repo.id} item xs={12} sm={12} md={4} lg={4} xl={4}>
            <RepoCard details={repo} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ResultBox;
