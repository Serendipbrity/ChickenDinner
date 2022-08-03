import { useQuery } from "@apollo/client";
import ReportRow from "./ReportRow";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { GET_REPORTS } from "../queries/reportQueries";
import AddReport from "./AddReport";


export default function Reports() {
  const { loading, error, data } = useQuery(GET_REPORTS);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
   
        {!loading && !error && (
          <table className="table table-hover mt-3">
          <div id="routesHeader" className="">Reports</div>
          {/* <AddReport/> */}
            <tbody>
              {data.reports.map((report) => (
                <ReportRow key={report.id} report={report} />
              ))}
            </tbody>
          </table>
        )}
  
           {/* back button */}
           <div className="w-75 p-5 col" >
        <Link to="/" className="btn btn-sm mx-5 align-items-right btn-primary">
          Back
        </Link>
          </div>
    </>
  );
}