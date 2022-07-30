import { gql } from '@apollo/client';

const GET_REGIONS = gql`
query regions {
    regions {
        id
        regionName
    }
}
`;

const GET_REGION = gql`
query region($id: ID!) {
    region(id: $id) {
        id
        regionName
    
    }
}`

export { GET_REGIONS, GET_REGION };