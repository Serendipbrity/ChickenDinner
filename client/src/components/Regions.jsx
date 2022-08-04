import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import  RegionCard  from './RegionCard';
import { GET_REGIONS } from '../queries/regionQueries';
// import Spreadsheet from './Spreadsheet.jsx';
import Users from './Users';
import Reports from './Reports';
// import AddRegion from './AddRegion';
import React, {Component} from 'react';

export default function Regions() {
    const { loading, error, data } = useQuery(GET_REGIONS);
    
    if (loading) return <Spinner />;
    if (error) return <p>Something went wrong</p>;
  return (
      <>
          <div id='routesHeader'>Routes</div>
          {/* <AddRegion /> */}
          <div className='row mt-4'>
              {data.regions.map((region) => (
                  <RegionCard key={region.id} region={region} />
              ))}
          </div>
              
          {/* <Reports /> */}
          {/* <Spreadsheet/> */}
    </>
  )
}
