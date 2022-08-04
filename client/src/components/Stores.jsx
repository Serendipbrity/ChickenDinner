import { useQuery } from "@apollo/client";
import StoreRow from "./StoreRow";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { GET_STORES } from "../queries/storeQueries";
import AddStore from "./AddStore";
import EditStoreForm from "./EditStoreForm";
import React, {Component} from 'react';


export default function Stores() {
  const { loading, error, data } = useQuery(GET_STORES);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      <div>
        <div className="flex-container d-flex">
          <div id="routesHeader" className="flex-child ">Stores</div>
               {/* back button */}
 
      <AddStore />
      
        </div>
        {/* <EditStoreForm store={data.store}/> */}
        {!loading && !error && (
          <table className="table table-hover mt-3">
            <thead className="colNames">
              <tr>
                <th></th>
                <th>Route Order</th>
                <th>Store Name</th>
                <th>Store Address</th>
                <th>Region </th>
                <th>Contact Name </th>
                <th>Contact Info </th>
                <th>When Can Contact </th>
                <th>Directions </th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {data.stores.map((store) => (
                <StoreRow key={store.id} store={store} />
              ))}
            </tbody>
          </table>
        )}
          </div>
          <div className="m-3">
        <Link to="/" className="btn btn-sm d-inline btn-primary mx-4 p-2">
          Back
        </Link>
      </div>
    </>
  );
}
