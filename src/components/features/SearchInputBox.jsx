import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';

import { token } from '../../configs/config';
import useRepoStore from '../../store/useRepoStore';

const SearchInputBox = () => {
  const [keyword, setKeyword] = useState('');
  const { setRepos } = useRepoStore(state => state);

  const handleOnKeyPress = event => {
    if (event.key === 'Enter') {
      handleClickSearch(event);
    }
  };

  const handleChangeSearch = event => {
    setKeyword(event.target.value);
  };
  const handleClickSearch = async event => {
    event.preventDefault();
    if (keyword) {
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
      setRepos(response.data.items);
      // const count = response.data.total_count;
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
