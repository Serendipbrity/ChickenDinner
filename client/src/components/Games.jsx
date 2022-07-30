import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import  GameCard  from './GameCard';
import { GET_GAMES } from '../queries/gameQueries';


export default function Games() {
    const { loading, error, data } = useQuery(GET_GAMES);
    
    if (loading) return <Spinner />;
    if (error) return <p>Something went wrong</p>;
  return (
      <>
          <div id='routesHeader'>Games</div>
          <div className='row mt-4'>
              {data.games.map((game) => (
                  <GameCard key={game.id} game={game} />
              ))}
         </div>
    </>
  )
}