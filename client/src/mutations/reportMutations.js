import { gql } from "@apollo/client";

const ADD_REPORT = gql`
  mutation addReport($storeName: String,
     $beginDate: String, 
     $endDate: String, 
     $machineNumber: String, 
     $lifetimeIn: Int, 
     $lifetimeOut:Int
    , $lifetimeTotal:Int
    , $pOutTotal:Int
    , $previousIn:Int
    , $previousOut:Int
    , $periodIn:Int
    , $periodOut:Int
    , $net:Int
    , $locationPercentage:Int
    , $operatorPercentage:Int
    , $profit:Int
    , $collect:Int
    , $paidOut:Int
    , $locationTotal:Int
    , $operatorTotal:Int
    , $signature: String) {
    addReport(storeName: $storeName, beginDate: $beginDate, machineNumber: $machineNumber, lifetimeIn: $lifetimeIn, lifetimeOut: $lifetimeOut, lifetimeTotal: $lifetimeTotal, pOutTotal: $pOutTotal,previousIn: $previousIn, previousOut: $previousOut, periodIn: $periodIn, periodOut: $periodOut, net: $net, locationPercentage: $locationPercentage, operatorPercentage: $operatorPercentage, profit: $profit, collect: $collect, paidOut: $paidOut, locationTotal: $locationTotal, operatorTotal: $operatorTotal, signature: $signature) {
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
  }`;

const UPDATE_REPORT = gql`
  mutation updateReport($id: ID!, $storeName: String, $beginDate: String, $endDate: String, $machineNumber: String, $lifetimeIn: Int, $lifetimeOut:Int, $pOutTotal:Int,$lifetimeTotal:Int, $previousIn:Int, $previousOut:Int, $periodIn:Int, $periodOut:Int, $net:Int, $locationPercentage:Int, $operatorPercentage:Int, $profit:Int, $collect:Int, $paidOut:Int, $locationTotal:Int, $operatorTotal:Int, $signature: String) {
    updateReport(id: $id, storeName: $storeName, beginDate: $beginDate, machineNumber: $machineNumber, lifetimeIn: $lifetimeIn, lifetimeOut: $lifetimeOut, lifetimeTotal: $lifetimeTotal, pOutTotal: $pOutTotal, previousIn: $previousIn, previousOut: $previousOut, periodIn: $periodIn, periodOut: $periodOut, net: $net, locationPercentage: $locationPercentage, operatorPercentage: $operatorPercentage, profit: $profit, collect: $collect, paidOut: $paidOut, locationTotal: $locationTotal, operatorTotal: $operatorTotal, signature: $signature) {
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
  }`;

const DELETE_REPORT = gql`
mutation deleteReport($storeName: String,
    $beginDate: String, 
    $endDate: String, 
    $machineNumber: String, 
    $lifetimeIn: Int, 
    $lifetimeOut:Int
   , $lifetimeTotal:Int
    , $pOutTotal:Int
   , $previousIn:Int
   , $previousOut:Int
   , $periodIn:Int
   , $periodOut:Int
   , $net:Int
   , $locationPercentage:Int
   , $operatorPercentage:Int
   , $profit:Int
   , $collect:Int
   , $paidOut:Int
   , $locationTotal:Int
   , $operatorTotal:Int
   , $signature: String) {
   deleteReport(storeName: $storeName, beginDate: $beginDate, machineNumber: $machineNumber, lifetimeIn: $lifetimeIn, lifetimeOut: $lifetimeOut, lifetimeTotal: $lifetimeTotal, pOutTotal: $pOutTotal,previousIn: $previousIn, previousOut: $previousOut, periodIn: $periodIn, periodOut: $periodOut, net: $net, locationPercentage: $locationPercentage, operatorPercentage: $operatorPercentage, profit: $profit, collect: $collect, paidOut: $paidOut, locationTotal: $locationTotal, operatorTotal: $operatorTotal, signature: $signature) {
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
 }`;

export { DELETE_REPORT, ADD_REPORT, UPDATE_REPORT };