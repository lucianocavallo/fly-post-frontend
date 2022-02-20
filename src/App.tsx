import { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './context';

import { Home } from './pages/Home';
import { NotRegistered } from './pages/NotRegistered';

import './styles/global.scss';

export const App = () => {
  const [isAuth, setIsAuth] = useState(true);
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Home /> : <NotRegistered />} />
      </Routes>
    </BrowserRouter>
  );
};
