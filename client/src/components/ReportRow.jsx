import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { GET_REPORTS } from '../queries/reportQueries';
import { DELETE_REPORT } from '../mutations/reportMutations';
import Spreadsheet from './Spreadsheet';
// import Spreadsheet from "react-spreadsheet";



export default function ReportRow({ report }) {
    const [deleteUser] = useMutation(DELETE_REPORT, {
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
      <tr>
          <td>{report.storeName}</td>
          <td>{report.beginDate}</td>
          <td>{report.endDate}</td>
          <td>{report.machineNumber}</td>
          <td>{report.lifetimeIn}</td>
          <td>{report.lifetimeOut}</td>
          <td>{report.previousIn}</td>
          <td>{report.previousOut}</td>
          <td>{report.periodIn}</td>
          <td>{report.periodOut}</td>
          <td>{report.net}</td>
          <td>{report.locationPercentage}</td>
          <td>{report.operatorPercentage}</td>
          <td>{report.profit}</td>
          <td>{report.collect}</td>
          <td>{report.paidOut}</td>
          <td>{report.locationTotal}</td>
          <td>{report.operatorTotal}</td>
            <td>{report.signature}</td>
          <td className="btn btn-danger btn-sm" onClick={deleteUser}><FaTrash /></td>
          <Spreadsheet />
      </tr>
   
  )
}