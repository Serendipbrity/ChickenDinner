// import { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { useMutation } from "@apollo/client";
// import { ADD_REPORT } from "../mutations/reportMutations";
// import {GET_REPORTS} from "../queries/reportQueries";


// export default function AddReport() {
//     const [storeName, setStoreName] = useState('');
//     const [beginDate, setBeginDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [machineNumber, setMachineNumber] = useState('');
//     const [lifetimeIn, setLifetimeIn] = useState('');
//     const [lifetimeOut, setLifetimeOut] = useState('');
//     const [lifetimeTotal, setLifetimeTotal] = useState('');
//     const [pOutTotal, setPOutTotal] = useState('');
//     const [previousIn, setPreviousIn] = useState('');
//     const [previousOut, setPreviousOut] = useState('');
//     const [periodIn, setPeriodIn] = useState('');
//     const [periodOut, setPeriodOut] = useState('');
//     const [net, setNet] = useState('');
//     const [locationPercentage, setLocationPercentage] = useState('');
//     const [operatorPercentage, setOperatorPercentage] = useState('');
//     const [profit, setProfit] = useState('');
//     const [collect, setCollect] = useState('');
//     const [paidOut, setPaidOut] = useState('');
//     const [locationTotal, setLocationTotal] = useState('');
//     const [operatorTotal, setOperatorTotal] = useState('');
//     const [signature, setSignature] = useState('');




//     const [addReport] = useMutation(ADD_REPORT, {
//       variables: {storeName, beginDate, endDate, machineNumber, lifetimeIn, lifetimeOut, lifetimeTotal, pOutTotal, previousIn, previousOut, periodIn, periodOut, net, locationPercentage, operatorPercentage, profit, collect, paidOut, locationTotal, operatorTotal, signature},
//       update(cache, { data: { addReport } }) { 
//         const { reports } = cache.readQuery({ query: GET_REPORTS });
    
//         cache.writeQuery({
//           query: GET_REPORTS,
//           data: { reports: [...reports, addReport] }
//         });
//       }
//     });
  
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (signature === "" ) {
//       return alert("Please fill fill in Signature field");
//     }
//     addReport(storeName, beginDate, endDate, machineNumber, lifetimeIn, lifetimeOut, lifetimeTotal, pOutTotal, previousIn, previousOut, periodIn, periodOut, net, locationPercentage, operatorPercentage, profit, collect, paidOut, locationTotal, operatorTotal, signature);

//     // clear the form
//     setStoreName("");
//       setBeginDate("");
//       setEndDate("");
//       setMachineNumber("");
//       setLifetimeIn("");
//       setLifetimeOut("");
//       setLifetimeTotal("");
//       setPOutTotal("");
//       setPreviousIn("");
//       setPreviousOut("");
//       setPeriodIn("");
//       setPeriodOut("");
//       setNet("");
//       setLocationPercentage("");
//       setOperatorPercentage("");
//       setProfit("");
//       setCollect("");
//       setPaidOut("");
//       setLocationTotal("");
//       setOperatorTotal("");
//       setSignature("");
//   };
//   return (
//     <>
//       <button
//         id="btnE"
//         type="button"
//         className="btn btn-secondary mt-4 align-items-center"
//         data-bs-toggle="modal"
//         data-bs-target="#addReportModel"
//       >
//         <div className="d-flex">
//           <FaUser className="icon" />
//           <div>Add Report</div>
//         </div>
//       </button>

//       <div
//         className="modal fade"
//         id="addReportModel"
//         aria-labelledby="addReportModelLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addReportModelLabel">
//                 New Report
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={onSubmit}>
//                 <div className="mb-3">
//                   <label className="form-label" >Store Name: </label>
//                                   <input type="text" className="form-control" id="rStoreName" value={storeName} onChange={(e) => setStoreName(e.target.value)}></input>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label" >Begin Date: </label>
//                                   <input type="text" className="form-control" id="beginDate" value={beginDate} onChange={(e) => setBeginDate(e.target.value)}></input>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label" >End Date: </label>
//                                   <input type="text" className="form-control" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)}></input>
//                               </div>
//                               <div className="mb-3">
//                   <label className="form-label" >Machine Number: </label>
//                                   <input type="text" className="form-control" id="machineNumber" value={machineNumber} onChange={(e) => setMachineNumber(e.target.value)}></input>
//                               </div>
//                               <div className="mb-3">
//                   <label className="form-label" >LifetimeIn: </label>
//                                   <input type="text" className="form-control" id="lifetimeIn" value={lifetimeIn} onChange={(e) => setLifetimeIn(e.target.value)}></input>
//                               </div>
//                               <div className="mb-3">
//                   <label className="form-label" >Lifetime Out: </label>
//                                   <input type="text" className="form-control" id="lifetimeOut" value={lifetimeOut} onChange={(e) => setLifetimeOut(e.target.value)}></input>
//                               </div>
//                                    {/* FINISH THIS LATER */}
//                               <div className="mb-3">
//                   <label className="form-label" >Signature: </label>
//                                   <input type="text" className="form-control" id="signature" value={signature} onChange={(e) => setSignature(e.target.value)}></input>
//                               </div>
                         
//                               <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }