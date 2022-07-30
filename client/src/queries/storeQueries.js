import { gql } from '@apollo/client';

const GET_STORES = gql`
query getStores {
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

export { GET_STORES };