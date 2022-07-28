import Header from './components/Header';
import Users from './components/Users';
import AddUserModel from './components/AddUserModel';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

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
        < Header />
        <div className='container'>
        <AddUserModel />
          < Users />
          </div>
        </ApolloProvider>
      </>
  );
}

export default App;
