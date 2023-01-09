import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';

import { token } from '../../configs/config';
import useRepoStore from '../../store/useRepoStore';

/* 검색창 */
const SearchInputBox = () => {
  /* 검색된 Repository setter 함수 (전역) */
  const { setRepos } = useRepoStore(state => state);
  const [keyword, setKeyword] = useState(''); // 검색어 변수

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
      /* 키워드가 있을 경우에만 API 호출 */
      const response = await axios.get(
        'https://api.github.com/search/repositories',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            q: keyword,
          },
        },
      );

      /* 전역 변수에 검색 결과 저장 */
      setRepos(response.data.items);
    }
  };
  return (
    <SearchPaper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="깃허브 레포지토리를 검색해보세요!"
        value={keyword}
        onChange={handleChangeSearch}
        onKeyPress={handleOnKeyPress}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={handleClickSearch}
      >
        <SearchIcon />
      </IconButton>
    </SearchPaper>
  );
};

const SearchPaper = styled(Paper)`
  && {
    box-shadow: 0px 0px 0px;
    border: 1px solid #d6d6d6;
  }
`;

export default SearchInputBox;
