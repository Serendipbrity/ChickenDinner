import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';
import Regions from './components/Regions';
import Stores from './components/Stores';
import Games from './components/Games';
import NotFound from './pages/NotFound';
import Reports from './components/Reports';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {setContext} from '@apollo/client/link/context';
import {SpreadsheetComponent} from '@syncfusion/ej2-react-spreadsheet'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// function to get rid of error message in console that we get from deleting without refreshing
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        users: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        stores: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      },
    }
  }
}
);

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
        < Header />
        <div className='container'>
            <Routes>
              {/* home is login page */}
              <Route path="/" element={<Home />} />
              {/* regions id */}
              <Route path='/regions/:id' element={<Stores />} />
              // {/* stores id */}
              <Route path='/stores/:id' element={<Reports />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/regions' element={<Regions />} />
             <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
    
        </ApolloProvider>
      </>
  );
}

              // {/* add reports  */}
             

export default App;
