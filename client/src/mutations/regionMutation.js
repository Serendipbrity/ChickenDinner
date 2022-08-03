import { gql } from "@apollo/client";

const ADD_REGION = gql`
  mutation addRegion($regionName: String) {
    addRegion(regionName: $regionName) {
      regionName
    }
  }
`;

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
    deleteRegion(id: $id) {
      id
      regionName
    }
  }
`;

export { DELETE_REGION, ADD_REGION, UPDATE_REGION };
