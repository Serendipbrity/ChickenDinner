import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";

export default function AddUserModel() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => { 
        e.preventDefault();
        console.log(username, email, password);
     }
  return (
    <>
      <button
        id="btnE"
        type="button"
        class="btn btn-secondary"
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
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addUserModel"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Manager</div>
        </div>
      </button>

      <div
        class="modal fade"
        id="addUserModel"
        aria-labelledby="addUserModelLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addUserModelLabel">
                Add Employee
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" >Username: </label>
                                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                                  <label className="form-label" >Email: </label>
                                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                  <label className="form-label" >Password: </label>
                                  <input type="text" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                              </div>
                              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
