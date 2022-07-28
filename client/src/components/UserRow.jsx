import { FaTrash, FaUpload } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { GET_USERS } from '../queries/userQueries';
import { DELETE_USER } from '../mutations/userMutations';

export default function UserRow({ user }) {
    const [deleteUser] = useMutation(DELETE_USER, {
        variables: { id: user.id },
    // ---- delete user from screen without refreshing page--->
        update(cache, { data: { deleteUser } }) {
            const { users } = cache.readQuery({ query: GET_USERS });
            cache.writeQuery({
                query: GET_USERS,
                data: { users: users.filter(user => user.id !== deleteUser.id) }
            });
        }, 
        // <--------------------
    });
  return (
      <tr>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.id}</td>
            <td className="btn btn-danger btn-sm" onClick={deleteUser}><FaTrash/></td>
     </tr>
  )
}
