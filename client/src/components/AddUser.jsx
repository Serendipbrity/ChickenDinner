import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../mutations/userMutations";
import {GET_USERS} from "../queries/userQueries";




export default function AddUser() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [addUser] = useMutation(ADD_USER, {
      variables: { username, email, password },
      update(cache, { data: { addUser } }) { 
        const { users } = cache.readQuery({ query: GET_USERS });
    
        cache.writeQuery({
          query: GET_USERS,
          data: { users: [...users, addUser] }
        });
      }
    });
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      return alert("Please fill in all fields");
    }
    addUser(username, email, password);

    // clear the form
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <button
        id="btnE"
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addUserModel"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Employee</div>
        </div>
      </button>

      <button
        id="btnM"
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addUserModel"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Manager</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addUserModel"
        aria-labelledby="addUserModelLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addUserModelLabel">
                Add Employee
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" >Username: </label>
                                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                                  <label className="form-label" >Email: </label>
                                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                  <label className="form-label" >Password: </label>
                                  <input type="text" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                              </div>
                              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
