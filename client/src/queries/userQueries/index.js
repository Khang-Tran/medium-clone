import { gql } from 'apollo-boost';

export const REGISTER_USER = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      name
      joinDate
      email
    }
  }
`;
