import React from 'react';

import { Grid } from '@mui/material';

import useRepoStore from '../../store/useRepoStore';

import RepoCard from './RepoCard';

const SearchResultBox = ({ repoRefs }) => {
  /* 검색된 Repository 배열 변수 (전역) */
  const { repos } = useRepoStore(state => state);

  return (
    <Grid container style={{ maxHeight: '60vh', overflow: 'auto' }}>
      {repos.map((repo, idx) => {
        return (
          <Grid
            key={repo.id}
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            ref={element => (repoRefs.current[`repo-${repo.id}`] = element)}
          >
            <RepoCard details={repo} refs={repoRefs} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SearchResultBox;
