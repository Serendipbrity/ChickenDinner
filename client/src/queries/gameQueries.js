import { gql } from '@apollo/client';

const GET_GAMES = gql`
query games {
    games {
        id
        gameType
        gameBrand
        machineNumber
    }
}
`;

const GET_GAME = gql`
query game($id: ID!) {
    game(id: $id) {
        id
        gameType
        gameBrand
    }
}`

export { GET_GAMES, GET_GAME };