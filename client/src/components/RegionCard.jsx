import Stores from "./Stores";

export default function RegionCard({ region }) {
    return (
      <div className='col-md-6'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='card-title'>{region.regionName}</h5>
                        <a className='btn btn-light' href={`/regions/${region.id}`} path="/" element={<Stores />} >
                View Stores
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

