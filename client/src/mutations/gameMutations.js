import { gql } from "@apollo/client";

const ADD_GAME = gql`
  mutation addGame(
    $gameType: String 
    $gameBrand: String 
    $machineNumber: Int
    ) {
    addGame(
      gameType: $gameType
      gameBrand: $gameBrand
      machineNumber: $machineNumber
    ) {
      id
      gameType
      gameBrand
      machineNumber
    }
  }`;

const UPDATE_GAME = gql`
  mutation updateGame($id: ID!, $gameType: String, $gameBrand: String, $machineNumber: Int) {
    updateGame(id: $id, gameType: $gameType, gameBrand: $gameBrand, machineNumber: $machineNumber) {
        id
        gameType
        gameBrand
        machineNumber
    }
  }`;

const DELETE_GAME = gql`
  mutation deleteGame($id: ID!) {
    deleteGame(id: $id) {
      id
      gameType
      gameBrand
      machineNumber
    }
  }
`;

export { DELETE_GAME, ADD_GAME, UPDATE_GAME };
