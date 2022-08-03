import { useQuery } from '@apollo/client';
import UserRow from './UserRow';
// import Spinner from './Spinner';
import { GET_USERS } from '../queries/userQueries';
import AddUser from './AddUser';
// import EditUserForm from './EditUserForm';


export default function Users() {
    const { loading, error, data } = useQuery(GET_USERS);
    // if (loading) return <Spinner />;
    if (error) return <p>Something went wrong</p>;
    return (
        <>
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead className='colNames'>
                        <tr>
                        <th>username </th>
                        <th>email</th>
                        <th>password</th>
                        <th>id</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.users.map(user => (
                            <UserRow key={user.id} user={user } />
                        ))}
                        <AddUser />
                        {/* <EditUserForm  /> */}
                    </tbody>
                </table>
            )}
        </>
  )
}


