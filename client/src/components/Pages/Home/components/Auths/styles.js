import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Form = styled.form`
  height: 50%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export { Container, Form };
