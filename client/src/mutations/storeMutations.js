import { gql } from "@apollo/client";

const ADD_STORE = gql`
  mutation addStore(
    $routeOrder: Int
    $storeName: String
    $storeAddress: String
    $region: String
    $contactName: String
    $contactInfo: String
    $whenCanContact: String
    $directions: String
  ) {
    addStore(
      routeOrder: $routeOrder
      storeName: $storeName
      storeAddress: $storeAddress
      region: $region
      contactName: $contactName
      contactInfo: $contactInfo
      whenCanContact: $whenCanContact
      directions: $directions
    ) {
      id
      routeOrder
      storeName
      storeAddress
      region
      contactName
      contactInfo
      whenCanContact
      directions {
        game {
          id
          gameType
          gameBrand
          machineNumber
        }
      }
    }
  }
`;

const UPDATE_STORE = gql`
  mutation updateStore(
    $id: ID!
    $routeOrder: Number
    $storeName: String
    $storeAddress: String
    $region: String
    $contactName: String
    $contactInfo: String
    $whenCanContact: String
    $directions: String
  ) {
    updateStore(
      id: $id
      routeOrder: $routeOrder
      storeName: $storeName
      storeAddress: $storeAddress
      region: $region
      contactName: $contactName
      contactInfo: $contactInfo
      whenCanContact: $whenCanContact
      directions: $directions
    ) {
      id
      routeOrder
      storeName
      storeAddress
      region
      contactName
      contactInfo
      whenCanContact
      directions
    }
  }
`;

const DELETE_STORE = gql`
  mutation deleteStore($id: ID!) {
    deleteStore(id: $id) {
      id
      routeOrder
      storeName
      storeAddress
      region
      contactName
      contactInfo
      whenCanContact
      directions
    }
  }
`;

export { DELETE_STORE, ADD_STORE, UPDATE_STORE };
