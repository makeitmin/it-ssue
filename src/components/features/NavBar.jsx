import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';

import { Header1, Header4 } from '../styles/Texts';

/* 상단바 컴포넌트 */
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        width: '100%',
        position: 'sticky',
        top: '0px',
        paddingTop: '20px',
        zIndex: 1000,
        background: '#FFFFFF',
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Box>
            <Header1>itssue</Header1>
          </Box>
        </Grid>
        <Grid item>
          <NavigateButton onClick={() => navigate('/it-ssue')}>
            <Header4>검색하기</Header4>
          </NavigateButton>
          <NavigateButton onClick={() => navigate('/issues')}>
            <Header4>모아보기</Header4>
          </NavigateButton>
        </Grid>
      </Grid>
    </Box>
  );
};

/* 커스텀 컴포넌트 */
const NavigateButton = styled(Button)`
  && {
    color: #000000;
    padding: 10px;
    background-color: transparent;
    border-radius: 8px;
  }
  &&:hover {
    background-color: transparent;
  }
  &&:focus {
    box-shadow: none;
    background-color: #ffffff;
  }
  &&:active {
    box-shadow: none;
    background-color: #ffffff;
  }
`;

export default NavBar;
