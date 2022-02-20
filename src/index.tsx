import reactDom from 'react-dom';
import { App } from './App';
import { ContextProvider } from './context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { config } from './config';

const client = new ApolloClient({
  uri: `${config.apiUrl}/graphql`,
  cache: new InMemoryCache(),
});

console.log(config.apiUrl);
console.log(process.env.API_URL);

reactDom.render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
