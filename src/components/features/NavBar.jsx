import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        width: '100%',
        height: '64px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '12px',
        paddingLeft: '12px',
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
            <Logo>itssue</Logo>
          </Box>
        </Grid>
        <Grid item>
          <NavigateButton onClick={() => navigate('/')}>
            <MenuText>검색하기</MenuText>
          </NavigateButton>
          <NavigateButton onClick={() => navigate('/issues')}>
            <MenuText>모아보기</MenuText>
          </NavigateButton>
        </Grid>
      </Grid>
    </Box>
  );
};

const Logo = styled('span')`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const MenuText = styled('span')`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

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
