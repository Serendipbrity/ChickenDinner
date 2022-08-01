import { gql } from '@apollo/client';

const GET_GAMES = gql`
query games {
    games {
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
`;

const GET_GAME = gql`
query game($id: ID!) {
    game(id: $id) {
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
}`

export { GET_GAMES, GET_GAME };