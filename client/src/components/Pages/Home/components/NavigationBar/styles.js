import Button from '@material-ui/core/Button/Button';
import styled from 'styled-components';

const Container = styled.div`
  grid-row: nav-start / nav-end;
  grid-column: popular-start / -1;
  width: 100%;
  height: 100%;
`;

const LoginButton = styled(Button)`
  && {
    margin-right: 2rem;
    margin-left: 1.5rem;
  }
`;

export { Container, LoginButton };
