import { useQuery } from '@apollo/client';
import UserRow from './UserRow';
// import Spinner from './Spinner';
import { GET_USERS } from '../queries/userQueries';
import AddUser from './AddUser';
import { Link } from 'react-router-dom';
// import EditUserForm from './EditUserForm';
import React, {Component} from 'react';

export default function Users() {
    const { loading, error, data } = useQuery(GET_USERS);
    // if (loading) return <Spinner />;
    if (error) return <p>Something went wrong</p>;
    return (
        <>
            <div className='d-flex '>
                <div className='flex-child userHeader'> Users </div>
           <AddUser className=''/>
                </div>
        
               {/* back button */}
   
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead className='colNames'>
                        <tr>
                        <th>username </th>
                        <th>email</th>
                        {/* <th>password</th> */}
                        {/* <th>id</th> */}
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.users.map(user => (
                            <UserRow key={user.id} user={user } />
                        ))}
                   
                        {/* <EditUserForm  /> */}
                    </tbody>
                </table>
            )}
                 <div className="m-3">
        <Link to="/" className="btn btn-sm d-inline btn-primary mx-4 p-2">
          Back
        </Link>
      </div>
        </>
  )
}


