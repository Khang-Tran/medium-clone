import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => (
  <Container>
    <CircularProgress color='primary'/>
  </Container>
);

export default Spinner;
