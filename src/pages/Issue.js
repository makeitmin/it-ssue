import React, { useState, useEffect } from 'react';

import { Container, Stack, Box } from '@mui/material';
import styled from 'styled-components';

import IssueBookmarkBox from '../components/features/IssueBookmarkBox';
import IssueBox from '../components/features/IssueBox';
import NavBar from '../components/features/NavBar';
import useBookmarkStore from '../store/useBookmarkStore';

const Issue = () => {
  const { userBookmarks } = useBookmarkStore(state => state);
  const [targetRepo, setTargetRepo] = useState();

  useEffect(() => {
    if (userBookmarks.length > 0) {
      setTargetRepo(userBookmarks[0].full_name);
    }
  }, [userBookmarks]);

  return (
    <Container>
      <Stack spacing={10}>
        <NavBar />
        <Box>
          <Box>
            <HeaderText>내 북마크</HeaderText>
            <IssueBookmarkBox setTargetRepo={setTargetRepo} />
          </Box>
          <Box style={{ marginTop: '30px' }}>
            <HeaderText>이슈</HeaderText>
            <IssueBox targetRepo={targetRepo} />
          </Box>
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

export default Issue;
