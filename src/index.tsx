import reactDom from 'react-dom';
import { App } from './App';
import { config } from './config';
import { ContextProvider } from './context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${config.apiUrl}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const storage = window.localStorage.getItem('__token__');
  let token;
  if (storage) {
    token = JSON.parse(storage)['token'];
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: false,
            merge(existing, incoming, { args: { offset = '0' } }: any) {
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[parseInt(offset) + i] = incoming[i];
              }
              return merged;
            },
          },
        },
      },
    },
  }),
});

reactDom.render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
