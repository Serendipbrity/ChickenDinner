import Stores from "./Stores";

export default function GameCard({ game }) {
    return (
      <div className='col-md-6'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='card-title'>{game.gameType}</h5>
                        {/* <a className='btn btn-light' href={`/regions/${game.id}`} path="/" element={<Report />} > */}
                View Reports
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }