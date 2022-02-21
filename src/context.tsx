import { createContext, useState } from 'react';

const initialContext = {
  user: undefined,
  addUser: () => {},
  removeUser: () => {},
};

export const Context = createContext<ContextProps>(initialContext);

export const ContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<ContextUser | undefined>(undefined);

  const addUser = (user: ContextUser) => {
    setUser(user);
    window.sessionStorage.setItem('__token__', JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(undefined);
    window.sessionStorage.setItem('__token__', '');
  };

  return (
    <Context.Provider
      value={{
        user,
        addUser,
        removeUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

type ContextProps = {
  user: ContextUser | undefined;
  addUser: (user: ContextUser) => void;
  removeUser: () => void;
};

type ContextUser = {
  id: number;
  token: string;
  username: string;
};
