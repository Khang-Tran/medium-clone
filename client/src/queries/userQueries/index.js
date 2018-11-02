import { gql } from 'apollo-boost';

export const REGISTER_USER = gql`
  mutation($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation($input: LoginInput!) {
    login(input: $input) {
      token,
      user {
        id
        name
        email
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      name
      email
    }
  }
`;
