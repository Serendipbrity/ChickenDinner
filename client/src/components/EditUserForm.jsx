// import { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { GET_USER } from '../queries/userQueries';
// import { UPDATE_USER } from '../mutations/userMutations';
// import { useQuery } from '@apollo/client';

// export default function EditUserForm() {
//     // console.log({ user });
//     const [username, setUsername] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

//     const [updateUser] = useMutation(UPDATE_USER, {
//         variables: { id: user.id, username, email, password },
//         // update immediately so you can see changes right away without reloading page
//         refetchQueries: [{ query: GET_USER, variables: { id: user.id } }]
//     });

//     const onSubmit = async (e) => { 
//         e.preventDefault();

//         updateUser(username, email, password);
//     }

//   return (
//     <div className='mt-5'>
//           <h3>Update User Details</h3>
//           <form onSubmit={onSubmit}>
//           <div className="mb-3">
//                   <label className="form-label" >Username: </label>
//                                   <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label" >Email: </label>
//                                   <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label" >Password: </label>
//                                   <input type="text" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
//               </div>
//               <button type='submit' className='btn btn-primary'>Submit</button>
//           </form>
//     </div>
//   )
// }