import { useQuery } from "@apollo/client";
import ReportRow from "./ReportRow";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { GET_REPORTS } from "../queries/reportQueries";

export default function Reports() {
  const { loading, error, data } = useQuery(GET_REPORTS);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      <div>
        <div id="routesHeader">Reports</div>

        {!loading && !error && (
          <table className="table table-hover mt-3">
            <thead className="colNames">
              <tr>
                <th>Store Name</th>
                <th>Begin Date</th>
                <th>End Date</th>
                <th>machineNumber </th>
                <th>Lifetime In </th>
                <th>Lifetime Out</th>
                <th>Lifetime Total</th>
                <th>Previous In</th>
                <th>Previous Out</th>
                <th>Period In</th>
                <th>Period Out</th>
                <th>Net</th>
                <th>Location Percentage</th>
                <th>Operator Percentage</th>
                <th>Profit</th>
                <th>Collect</th>
                <th>Paid Out</th>
                <th>Location Total</th>
                <th>Operator Total</th>
                <th>Signature</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {data.reports.map((report) => (
                <ReportRow key={report.id} report={report} />
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