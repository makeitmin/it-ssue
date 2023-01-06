import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';
import axios from 'axios';

import { token } from '../../configs/config';
import useResultStore from '../../store/useResultStore';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const { setRepos } = useResultStore(state => state);

  const handleChangeSearch = event => {
    setKeyword(event.target.value);
  };
  const handleClickSearch = async event => {
    event.preventDefault();
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
  };
  return (
    <Paper
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
    </Paper>
  );
};

export default SearchBox;
