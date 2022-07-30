import { useQuery } from "@apollo/client";
import StoreRow from "./StoreRow";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { GET_STORES } from "../queries/storeQueries";

export default function Stores() {
  const { loading, error, data } = useQuery(GET_STORES);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      <div>
        <div id="routesHeader">Stores</div>

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
      {/* back button */}
      <div className="w-75 p-5">
        <Link to="/" className="btn btn-sm w-25 d-inline btn-primary">
          Back
        </Link>
      </div>
    </>
  );
}
