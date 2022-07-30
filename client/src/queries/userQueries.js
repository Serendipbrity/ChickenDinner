import { gql } from '@apollo/client';

const GET_USERS = gql`
query users {
    users {
      id
      username
      password
      email
    }
  }`;

const GET_USER = gql`
query user($id: ID!) {
    user(id: $id) {
      id
      username
      password
      email
    }
}`;

  export { GET_USERS, GET_USER };