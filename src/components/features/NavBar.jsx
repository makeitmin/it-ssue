import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';

import { Header1, Paragraph1 } from '../styles/Texts';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        width: '100%',
        marginTop: '20px',
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
          <NavigateButton onClick={() => navigate('/')}>
            <Paragraph1>검색하기</Paragraph1>
          </NavigateButton>
          <NavigateButton onClick={() => navigate('/issues')}>
            <Paragraph1>모아보기</Paragraph1>
          </NavigateButton>
        </Grid>
      </Grid>
    </Box>
  );
};

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
