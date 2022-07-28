import { gql, useQuery } from '@apollo/client';
import UserRow from './UserRow';
import { GET_USERS } from '../queries/userQueries';
import Spinner from './Spinner';


export default function Users() {
    const { loading, error, data } = useQuery(GET_USERS);
    if (loading) return <Spinner />;
    if (error) return <p>Something went wrong</p>;
    return (
        <>
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead className='colNames'>
                        <td>username </td>
                        <td>email</td>
                        <td>password</td>
                        <td>id</td>
                        <td></td>
                    </thead>
                    <tbody>
                        {data.users.map(user => (
                            <UserRow key={user.id} user={user } />
                        ))}
                    </tbody>
                </table>
            )}
        </>
  )
}


