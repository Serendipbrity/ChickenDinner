// import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { ADD_REGION } from "../mutations/regionMutation";
// import {GET_REGIONS} from "../queries/regionQueries";


// export default function AddRegion() {
//     const [regionName, setRegionName] = useState('');


//     const [addRegion] = useMutation(ADD_REGION, {
//       variables: { regionName },
//       update(cache, { data: { addRegion } }) { 
//         const { regions } = cache.readQuery({ query: GET_REGIONS });
    
//         cache.writeQuery({
//           query: GET_REGIONS,
//           data: { regions: [...regions, addRegion] }
//         });
//       }
//     });
  
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (regionName === "" ) {
//       return alert("Please add Region Name");
//     }
//     addRegion(regionName);

//     // clear the form
//     setRegionName("");
//   };
//   return (
//     <>
//       <button
//         id="btnE"
//         type="button"
//         className="btn btn-secondary w-40 mt-4"
//         data-bs-toggle="modal"
//         data-bs-target="#addRegionModel"
//       >
//         <div className="d-flex align-items-center">
//           <div>Add Region</div>
//         </div>
//       </button>

//       <div
//         className="modal fade"
//         id="addRegionModel"
//         aria-labelledby="addRegionModelLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addRegionModelLabel">
//                 New Region
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
//                   <label className="form-label" >Region Name: </label>
//                                   <input type="text" className="form-control" id="regionName" value={regionName} onChange={(e) => setRegionName(e.target.value)}></input>
//                 </div>
//                               <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }