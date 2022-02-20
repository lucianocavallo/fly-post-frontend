import reactDom from 'react-dom';
import { App } from './App';
import { ContextProvider } from './context';

reactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
