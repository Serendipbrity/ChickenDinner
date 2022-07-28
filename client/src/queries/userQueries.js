import { gql } from '@apollo/client';

const GET_USERS = gql`
query getUsers {
    users {
      id
      username
      password
      email
    }
  }`;

  export { GET_USERS };