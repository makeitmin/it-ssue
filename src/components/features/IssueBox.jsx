import React, { useState, useEffect } from 'react';

import { Grid, Typography, Pagination } from '@mui/material';
import axios from 'axios';

import { token } from '../../configs/config';
import useBookmarkStore from '../../store/useBookmarkStore';

import IssueCard from './IssueCard';

const IssueBox = ({ targetRepo }) => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);

  const { userBookmarks } = useBookmarkStore(state => state);

  const getGithubIssues = async _targetRepo => {
    const response = await axios.get(`https://api.github.com/search/issues`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: `repo:${_targetRepo} type:issue`,
        page: page,
        per_page: 9,
      },
    });

    setTotalPageCount(Math.ceil(response.data.total_count / 9));

    const _issues = response.data.items.map((i, idx) => {
      i['full_name'] = _targetRepo;
      return i;
    });
    setIssues(_issues);
  };

  useEffect(() => {
    if (targetRepo !== undefined) {
      getGithubIssues(targetRepo);
    }
  }, [targetRepo, userBookmarks, page]);

  return (
    <>
      <Grid container alignItems="stretch" style={{ width: '100%' }}>
        {issues.length > 0 ? (
          issues.map((issue, idx) => {
            return (
              <Grid
                item
                key={issue.node_id}
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
              >
                <IssueCard details={issue} />
              </Grid>
            );
          })
        ) : (
          <Typography>빈배열</Typography>
        )}
      </Grid>
      <Pagination
        count={totalPageCount}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    </>
  );
};

export default IssueBox;
