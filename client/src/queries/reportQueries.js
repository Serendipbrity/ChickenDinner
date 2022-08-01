import { gql } from '@apollo/client';

const GET_REPORTS = gql`
query reports {
    reports {
        id
        storeName
        beginDate
        endDate
        machineNumber
        lifetimeIn
        lifetimeOut
        lifetimeTotal
        pOutTotal
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
`;

const GET_REPORT = gql`
query report($id: ID!) {
    report(id: $id) {
        id
        storeName
        beginDate
        endDate
        machineNumber
        lifetimeIn
        lifetimeOut
        lifetimeTotal
        pOutTotal
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
}`

export { GET_REPORT, GET_REPORTS };