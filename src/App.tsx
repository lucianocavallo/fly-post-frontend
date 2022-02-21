import { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Context } from './context';

import { Home } from './pages/Home';
import { NotRegistered } from './pages/NotRegistered';
import { NewPost } from './pages/NewPost';
import { User } from './pages/User';

import './styles/global.scss';

export const App = () => {
  // const [isAuth, setIsAuth] = useState(false);
  const { user, removeUser } = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/not-registered" />}
        />
        <Route path="/new-post" element={<NewPost user={user} />} />
        <Route
          path="/user"
          element={
            user ? (
              <User user={user} removeUser={removeUser} />
            ) : (
              <Navigate to="/not-registered" />
            )
          }
        />
        <Route
          path="/not-registered"
          element={user ? <Navigate to="/" /> : <NotRegistered />}
        />
      </Routes>
    </BrowserRouter>
  );
};
