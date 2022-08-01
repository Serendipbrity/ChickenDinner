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
      {/* <div className="container"> */}
      <div className="row">
        <div id="routesHeader" className="col-9">Reports</div>
            {/* back button */}
      <div className="w-75 p-5 col" >
        <Link to="/" className="btn btn-sm w-25 mx-5 align-items-right btn-primary">
          Back
        </Link>
          </div>
          {/* </div> */}

        {!loading && !error && (
          <table className="table table-hover mt-3">
 
            <tbody>
              {data.reports.map((report) => (
                <ReportRow key={report.id} report={report} />
              ))}
            </tbody>
          </table>
        )}
      </div>
  
    </>
  );
}