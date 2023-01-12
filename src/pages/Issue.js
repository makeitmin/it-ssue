import React, { useState, useEffect } from 'react';

import { Container, Stack, Box } from '@mui/material';
import axios from 'axios';

import IssueBookmarkBox from '../components/features/IssueBookmarkBox';
import IssueBox from '../components/features/IssueBox';
import NavBar from '../components/features/NavBar';
import WarningAlert from '../components/features/WarningAlert';
import { ResponsiveBox } from '../components/styles/Cards';
import { Header2 } from '../components/styles/Texts';
import { token } from '../configs/config';
import useBookmarkStore from '../store/useBookmarkStore';

/* 모아보기 페이지 */
const Issue = () => {
  const [targetRepo, setTargetRepo] = useState(); // 선택(클릭)된 북마크 (full_name)
  const [issues, setIssues] = useState([]); // 선택된 북마크의 이슈 목록 배열 변수
  const [page, setPage] = useState(1); // 이슈 목록의 페이지 넘버
  const [totalPageCount, setTotalPageCount] = useState(0); // 전체 페이지 개수
  const [open, setOpen] = useState(false); // 검색 오류 alert

  /* 북마크 배열 변수 (전역) */
  const { userBookmarks } = useBookmarkStore(state => state);

  const getGithubIssues = async _targetRepo => {
    try {
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

      if (response.data.total_count / 9 > 1000) {
        /* 이슈 개수를 최대 1000개로 제한 (Github 정책) */
        setTotalPageCount(Math.ceil(1000 / 9));
      } else {
        setTotalPageCount(Math.ceil(response.data.total_count / 9));
      }

      /* 검색된 이슈 데이터에 해당하는 레포지토리명 추가 */
      const _issues = response.data.items.map((i, idx) => {
        i['full_name'] = _targetRepo;
        return i;
      });
      setIssues(_issues);
    } catch (error) {
      if (error.response.status >= 500) {
        setOpen(true);
      }
    }
  };

  useEffect(() => {
    if (userBookmarks.length > 0) {
      /* 선택된 북마크가 현재 페이지에서 삭제되어 더이상 북마크 목록에 없을 경우 */
      if (!userBookmarks.find((ub, idx) => ub.full_name === targetRepo)) {
        /* 보여지는 이슈 목록을 가장 처음 북마크로 초기화 */
        setTargetRepo(userBookmarks[0].full_name);
      }
    } else {
      /* 북마크 0개일 경우 */
      setTargetRepo('');
    }
  }, [userBookmarks]);

  useEffect(() => {
    if (targetRepo) {
      /* 선택된 북마크가 존재할 경우에만 이슈 검색 */
      getGithubIssues(targetRepo);
    } else {
      setIssues([]);
    }
  }, [targetRepo, page]);

  return (
    <Container maxWidth="lg" style={{ height: '100vh' }}>
      <NavBar />
      <ResponsiveBox>
        <Box>
          <Stack spacing={5}>
            <Box>
              <Header2>
                {userBookmarks.length > 0 ? '내 북마크' : '북마크가 없습니다.'}
              </Header2>
              <IssueBookmarkBox setTargetRepo={setTargetRepo} />
            </Box>
            <Box>
              <Header2>{targetRepo ? `${targetRepo} 의 이슈` : ''}</Header2>
              <IssueBox
                totalPageCount={totalPageCount}
                issues={issues}
                page={page}
                setPage={setPage}
              />
            </Box>
          </Stack>
        </Box>
      </ResponsiveBox>
      <WarningAlert
        open={open}
        setOpen={setOpen}
        message="이슈를 가져오지 못했습니다. 잠시 후 다시 시도해주세요."
      />
    </Container>
  );
};

export default Issue;
