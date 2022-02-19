import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import './styles/global.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
