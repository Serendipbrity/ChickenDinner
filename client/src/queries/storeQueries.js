import { gql } from '@apollo/client';

const GET_STORES = gql`
query stores {
    stores {
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

const GET_STORE = gql`
query store($id: ID!) {
    store(id: $id) {
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

export { GET_STORES, GET_STORE };