import { gql } from "@apollo/client";
import Auth from '../utils/auth';

const LOGIN_USER = gql`
  mutation login(
    $email: String!, 
    $password: String!)  {
    login(
     email: $email, 
      password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }`;

const ADD_USER = gql`
  mutation addUser(
    $username: String!, 
    $password: String!, 
    $email: String!
    ) {
    addUser(
      username: $username, 
      password: $password, 
      email: $email
      ) {
      id
      username
      password
      email
    }
  }`;

const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!,
    $username: String!,
    $email: String!,
    $password: String!
  ) {
    updateUser(
      id: $id,
      username: $username,
      password: $password,
      email: $email
    ) {
      id
      username
      password
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
      password
      email
    }
  }
`;

export { DELETE_USER, ADD_USER, UPDATE_USER, LOGIN_USER };
