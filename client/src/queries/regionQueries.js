import { gql } from '@apollo/client';

const GET_REGIONS = gql`
query regions {
    regions {
        id
        regionName
        store {
            id
            routeOrder
            storeName
            storeAddress
            region
            contactName
            contactInfo
            whenCanContact
            directions
            game{
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
}
`;

const GET_REGION = gql`
query region($id: ID!) {
    region(id: $id) {
        id
        regionName
        store {
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
}`

export { GET_REGIONS, GET_REGION };