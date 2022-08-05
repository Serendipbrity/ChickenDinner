import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Header, Users, Stores, Spreadsheet, Spinner, Reports, Regions, Nav, Games, EditUserForm, EditStoreForm } from './components/index.js';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {setContext} from '@apollo/client/link/context';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
// import React, { Component } from 'react';
import React from 'react';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// module.exports = function (webpackEnv) {

//   return {

//     resolve: {
// fallback:  {"crypto": false, 
//   "util": false }

//       }
//     }
//   }


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
  uri: '/graphql',
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
              <Route path='/stores' element={ <Stores/>} />
              // {/* stores id */}
              <Route path='/stores/:id' element={<Reports />} />
              <Route path='/reports' element={<Reports/>} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/games' element={<Games />} />
              <Route path='/users' element={<Users />} />
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
