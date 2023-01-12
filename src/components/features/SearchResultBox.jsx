import React, { useEffect, useRef, useState } from 'react';

import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';

import { token } from '../../configs/config';
import { useRepoStore } from '../../store/useRepoStore';

import RepoCard from './RepoCard';
import WarningAlert from './WarningAlert';

/* 검색하기 - '검색 결과' 영역 */
const SearchResultBox = ({ repoRefs, keyword, page, setPage }) => {
  /* 검색된 Repository 배열 변수 (전역) */
  const { repos, setRepos } = useRepoStore(state => state);
  /* 로딩 컴포넌트의 element 할당 (무한스크롤) */
  const [bottom, setBottom] = useState(null);

  /* 스크롤 맨 아래의 DOM에 할당하는 ref 객체 (무한스크롤) */
  const bottomObserver = useRef();

  const [open, setOpen] = useState(false); // 검색 오류 alert
  const perPage = 21;

  /* 레포지토리 검색 함수 */
  const getGithubRepos = async _page => {
    try {
      const config = {
        params: {
          q: keyword,
          per_page: 21,
          page: page,
        },
      };
      if (token) {
        config['headers'] = { Authorization: `Bearer ${token}` };
      }
      const response = await axios.get(
        'https://api.github.com/search/repositories',
        config,
      );
      /* 기존 레포지토리에 검색한 레포지토리 목록 추가 */
      setRepos([...repos].concat(response.data.items));
    } catch (error) {
      if (error.response.status >= 500) {
        setOpen(true);
      }
    }
  };

  useEffect(() => {
    /* 
      Intersection Observer (무한스크롤)
      - 스크롤 시 ref 객체에 닿는 것을 감지 후 page+=1
    */
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 0.5, rootMargin: '10px' },
    );
    bottomObserver.current = observer;
  });

  useEffect(() => {
    /* ref가 할당된 하단 컴포넌트 변화 감지 */
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  useEffect(() => {
    /* 
      Intersection Observer 에서 페이지 증가 시
      레포지토리 추가로 검색
    */
    if (keyword) {
      /* 키워드 없을 경우 (첫 렌더링) 동작 수행 X */
      getGithubRepos(page);
    }
  }, [page]);

  return (
    <>
      <Grid
        container
        style={{
          maxHeight: '50vh',
          overflow: 'auto',
          marginTop: '20px',
          rowGap: '16px',
          justifyContent: 'space-evenly',
        }}
      >
        {repos.map((repo, idx) => {
          return (
            <Grid
              key={repo.full_name}
              item
              style={{ padding: '0px 8px' }}
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              ref={element => {
                // 북마크 체크 여부 감지하는 ref
                repoRefs.current[`repo-${repo.id}`] = element;
              }}
            >
              <RepoCard details={repo} refs={repoRefs} />
            </Grid>
          );
        })}
        {repos.length > 0 && repos.length >= perPage ? (
          // 스크롤 하단을 감지하는 ref
          <CircularProgress ref={setBottom} color="inherit" />
        ) : (
          ''
        )}
      </Grid>
      <WarningAlert
        open={open}
        setOpen={setOpen}
        message="검색 결과를 가져오지 못했습니다. 잠시 후 다시 시도해주세요."
      />
    </>
  );
};

export default SearchResultBox;
