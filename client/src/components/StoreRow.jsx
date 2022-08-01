import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { GET_STORES } from "../queries/storeQueries";
// import { ADD_STORE } from "../mutations/storeMutations";
// import Games from "./Games";
import { DELETE_STORE } from "../mutations/storeMutations";
import Reports from "./Reports";

export default function StoreRow({ store }) {
  const [deleteStore] = useMutation(DELETE_STORE, {
    variables: { id: store.id },
    // ---- delete user from screen without refreshing page--->
    update(cache, { data: { deleteStore } }) {
      const { stores } = cache.readQuery({ query: GET_STORES });
      cache.writeQuery({
        query: GET_STORES,
        data: { stores: stores.filter((store) => store.id !== deleteStore.id) },
      });
    },
    // <--------------------
  });
    return (
   
        <tr className="storeRow">
                 <a href={`/stores/${store.id}`} path="/" element={<Reports />}>
        View Reports
      </a>
      <td>{store.routeOrder}</td>
        <td>{store.storeName}</td>
      <td>{store.storeAddress}</td>
      <td>{store.region}</td>
      <td>{store.contactName}</td>
      <td>{store.contactInfo}</td>
          <td>{store.whenCanContact}</td>
  
      <td>{store.directions}</td>
      <td className="btn btn-danger btn-sm" onClick={deleteStore}>
        <FaTrash />
          </td>
    </tr>
  );
}
