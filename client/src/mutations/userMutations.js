import { gql } from "@apollo/client";

const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      id
      username
      password
      email
    }
  }`;

const DELETE_USER = gql`
mutation deleteUser($id: ID!) {
        deleteUser (id: $id){
      id
      username
      password
      email
        }
  }`;

export { DELETE_USER, ADD_USER };
