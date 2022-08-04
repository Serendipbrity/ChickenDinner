import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import  GameCard  from './GameCard';
import { GET_GAMES } from '../queries/gameQueries';
import { Link } from 'react-router-dom';
import AddGame from './AddGame';
import React, {Component} from 'react';


export default function Games() {
    const { loading, error, data } = useQuery(GET_GAMES);
    
    if (loading) return <Spinner />;
    if (error) return <p>Something went wrong</p>;
  return (
    <>
      <div className='flex-container d-flex'>
      <div id='routesHeader' className='flex-child'>Games</div>
        <AddGame />
        </div>
          <div className='row mt-4'>
              {data.games.map((game) => (
                  <GameCard key={game.id} game={game} />
              ))}
      </div>
                    {/* back button */}
                    <div className="m-3">
        <Link to="/" className="btn btn-sm d-inline btn-primary mx-4 p-2">
          Back
        </Link>
      </div>
    </>
  )
}