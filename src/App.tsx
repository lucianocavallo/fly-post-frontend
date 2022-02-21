import { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './context';

import { Home } from './pages/Home';
import { NotRegistered } from './pages/NotRegistered';
import { NewPost } from './pages/NewPost';

import './styles/global.scss';

export const App = () => {
  // const [isAuth, setIsAuth] = useState(false);
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <NotRegistered />} />
        <Route path="/new-post" element={<NewPost user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};
