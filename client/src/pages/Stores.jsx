// ---- ALL STORES IN A REGION ----


import Spinner from './components/Spinner';
import { useQuery } from '@apollo/client';
// useParams to get id from url
import { Link, useParams } from 'react-router-dom';
import { GET_REGION } from '../queries/regionQueries';

export default function Stores() {
    // get id from url
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_REGION, {
        variables: { id }
    });
    // if loading, show spinner
    if (loading) return <Spinner />;
    if (error) return <p>Something went wrong</p>;
  return (
    <div>
    
      </div>
      
  )
}
