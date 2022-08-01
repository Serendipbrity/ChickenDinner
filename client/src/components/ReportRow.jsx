// import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { GET_REPORTS } from '../queries/reportQueries';
// import {useQuery} from '@apollo/client';
import { DELETE_REPORT } from '../mutations/reportMutations';
// import Spreadsheet from './Spreadsheet';
// import Spreadsheet from "react-spreadsheet";



export default function ReportRow({ report }) {
    const [deleteReport] = useMutation(DELETE_REPORT, {
        variables: { id: report.id },
    // ---- delete user from screen without refreshing page--->
        update(cache, { data: { deleteReport } }) {
            const { reports } = cache.readQuery({ query: GET_REPORTS });
            cache.writeQuery({
                query: GET_REPORTS,
                data: { reports: reports.filter(report => report.id !== deleteReport.id) }
            });
        }, 
        // <--------------------
        
    });

    // const App = () => { 
    //     const [data, setData] = useState([
    //         [{ value: report.storeName }, { value: report.storeAddress }, { value: report.region }, { value: report.contactName }, { value: report.contactInfo }, { value: report.whenCanContact }, { value: report.directions }],
    //     ]);
    //     return <Spreadsheet data={data} onChange={ setData} />
    //  }
    return (
        <table className="table table-hover mt-3">
        <thead className="colNames">
          <tr id="reportHead">
                    <th>Store Name:</th>
                    <td className="reportColor">{report.storeName }</td>
                    <th>Begin Date:</th>
                    <th className="reportColor">{ report.beginDate}</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
                    <th>End Date:</th>
                    <th className="reportColor">{report.endDate}</th>
            <th></th>
            <th></th>
            <th></th>
            </tr>
          <tr>
            <th>machineNumber </th>
             <td className="reportColor">{ report.machineNumber}</td>
            <th>Lifetime </th>
            <th></th>
            <th></th>
            <th>Prev </th>
            <th></th>
            <th></th>
            <th>Period</th>
            <th></th>
            <th></th>
            <th>Net</th>
            <th></th>
          </tr>
          <tr>
            <th>In</th>
            <th></th>
            <th className="reportColor">{report.lifetimeIn}</th>
            <th></th>
            <th></th>
            <th className="reportColor">{report.previousIn}</th>
            <th></th>
            <th></th>
            <th className="reportColor">{report.periodIn}</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Out</th>
            <th></th>
            <th className="reportColor">{report.lifetimeOut}</th>
            <th></th>
            <th></th>
            <th className="reportColor">{report.previousOut}</th>
            <th></th>
            <th></th>
            <th className="reportColor">{report.periodOut}</th>
            <th></th>
            <th></th>
            <th className="reportColor">{report.net}</th>
            <th></th>
          </tr>
          <tr>
            <th>Total</th>
            <th></th>
            <th>In</th>
            <th></th>
            <th></th>
            <th>Out</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Net</th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th className="reportColor">{report.lifetimeTotal}</th>
            <th></th>
            <th></th>
                    <th className="reportColor">{report.pOutTotal}</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
                    <th className="reportColor">{report.net }</th>
          </tr>
        </thead>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <th className="separate">separate</th>
          <thead>
          <tr>
            <th>Location:</th>
            <th></th>
            <th></th>
            <th></th>
            <th>Operator:</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th className="reportColor">{report.locationPercentage}%</th>
            <th className="reportColor">netXlocationPercentage</th>
            <th></th>
            <th></th>
            <th className="reportColor">{report.operatorPercentage}%</th>
            <th className="reportColor">netXoperatorPercentage</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Profit</th>
            <th className="reportColor">{report.profit}</th>
            <th></th>
            <th></th>
            <th>Collect</th>
            <th className="reportColor">{report.collect}</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Paid Out</th>
            <th className="reportColor">{report.paidOut}</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Total</th>
             <th className="reportColor">{ report.locationTotal}</th>
            <th></th>
            <th></th>
            <th>Total</th>
            <th className="reportColor">{report.operatorTotal}</th>
            <th></th>
            </tr>
        </thead>
     
      </table>
    //   <tr>
    //       <td>{report.storeName}</td>
    //       <td>{report.beginDate}</td>
    //       <td>{report.endDate}</td>
    //       <td>{report.machineNumber}</td>
    //       <td>{report.lifetimeIn}</td>
    //       <td>{report.lifetimeOut}</td>
    //       <td>{report.previousIn}</td>
    //       <td>{report.previousOut}</td>
    //       <td>{report.periodIn}</td>
    //       <td>{report.periodOut}</td>
    //       <td>{report.net}</td>
    //       <td>{report.locationPercentage}</td>
    //       <td>{report.operatorPercentage}</td>
    //       <td>{report.profit}</td>
    //       <td>{report.collect}</td>
    //       <td>{report.paidOut}</td>
    //       <td>{report.locationTotal}</td>
    //       <td>{report.operatorTotal}</td>
    //         <td>{report.signature}</td>
    //       <td className="btn btn-danger btn-sm" onClick={deleteUser}><FaTrash /></td>
    //       {/* <Spreadsheet /> */}
    //   </tr>
   
  )
}