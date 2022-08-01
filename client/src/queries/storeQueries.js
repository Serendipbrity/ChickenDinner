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
        game {
            id
            gameType
            gameBrand
            machineNumber
            report {
              id
              storeName
              beginDate
              endDate
              machineNumber
              lifetimeIn
              lifetimeOut
              lifetimeTotal
              previousIn
              previousOut
              periodIn
              periodOut
              net
              locationPercentage
              operatorPercentage
              profit
              collect
              paidOut
              locationTotal
              operatorTotal
              signature
            }
          }
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
        game {
            id
            gameType
            gameBrand
            machineNumber
            report {
              id
              storeName
              beginDate
              endDate
              machineNumber
              lifetimeIn
              lifetimeOut
              lifetimeTotal
              previousIn
              previousOut
              periodIn
              periodOut
              net
              locationPercentage
              operatorPercentage
              profit
              collect
              paidOut
              locationTotal
              operatorTotal
              signature
            }
          }
        }
}
`;

export { GET_STORES, GET_STORE };