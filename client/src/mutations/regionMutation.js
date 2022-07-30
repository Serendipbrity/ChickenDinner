import { gql } from "@apollo/client";

const ADD_REGION = gql`
  mutation addRegion($gameType: String, $gameBrand: String, $storeId: Int) {
    addRegion(gameType: $gameType, gameBrand: $gameBrand, storeId: $storeId) {
        id
        regionName
        store
    }
  }`;

const UPDATE_REGION = gql`
  mutation updateRegion($id: ID!, $regionName: String, $storeId: Int) {
    updateRegion(id: $id, regionName: $regionName, storeId: $storeId) {
        id
        regionName
        store
    }
  }
  `;

const DELETE_REGION = gql`
mutation deleteRegion($id: ID!) {
        deleteRegion (id: $id){
            id
           regionName
        }
  }`;

export { DELETE_REGION, ADD_REGION, UPDATE_REGION};