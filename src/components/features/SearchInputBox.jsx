import React, { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper, Divider } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';

import { token } from '../../configs/config';
import { useRepoStore } from '../../store/useRepoStore';

import WarningAlert from './WarningAlert';

/* 검색창 */
const SearchInputBox = ({ keyword, setKeyword, page }) => {
  /* 검색된 Repository setter 함수 (전역) */
  const { setRepos } = useRepoStore(state => state);
  const [open, setOpen] = useState(false); // 검색 오류 alert

  /* Enter 키 입력시 클릭 이벤트 발생 */
  const handleOnKeyPress = event => {
    if (event.key === 'Enter') {
      handleClickSearch(event);
    }
  };

  /* 검색창 Input Value onChange 함수 */
  const handleChangeSearch = event => {
    setKeyword(event.target.value);
  };

  /* 검색 클릭 이벤트 (Github API 호출) */
  const handleClickSearch = async event => {
    event.preventDefault();
    if (keyword) {
      try {
        /* 키워드가 있을 경우에만 API 호출 */
        const response = await axios.get(
          'https://api.github.com/search/repositories',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              q: keyword,
              per_page: 21,
              page: page,
            },
          },
        );
        /* 전역 변수에 검색 결과 저장 */
        setRepos(response.data.items);
      } catch (error) {
        if (error.response.status >= 500) {
          setOpen(true);
        }
      }
    }
  };

  /* 'X' 버튼 클릭시 검색어 clear */
  const handleClickClear = event => {
    event.preventDefault();
    setKeyword('');
  };

  return (
    <>
      <SearchInputPaper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 'inherit',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="깃허브 레포지토리를 검색해보세요!"
          value={keyword}
          autoFocus
          onChange={handleChangeSearch}
          onKeyPress={handleOnKeyPress}
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        {keyword.length > 0 ? (
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={handleClickClear}
          >
            <CloseIcon />
          </IconButton>
        ) : (
          ''
        )}
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={handleClickSearch}
        >
          <SearchIcon />
        </IconButton>
      </SearchInputPaper>
      <WarningAlert
        open={open}
        setOpen={setOpen}
        message="검색 결과를 가져오지 못했습니다. 잠시 후 다시 시도해주세요."
      />
    </>
  );
};

/* 커스텀 컴포넌트 */
const SearchInputPaper = styled(Paper)`
  && {
    box-shadow: 0px 0px 0px;
    border: 1px solid #d6d6d6;
  }
`;

export default SearchInputBox;
