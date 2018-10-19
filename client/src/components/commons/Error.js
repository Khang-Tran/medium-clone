import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 1rem;
`;
const Error = ({ error }) => {
  const pos = error.message.indexOf(':');
  const message = error.message.substring(pos + 1);
  return (
    <Container>
      <Typography variant='subtitle1' color='error'>{message}</Typography>
    </Container>
  );
};

export default Error;
