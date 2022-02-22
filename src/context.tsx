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
    const newUser = {
      ...user,
      id: String(user.id),
    };
    setUser(newUser);
    window.localStorage.setItem('__token__', JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(undefined);
    window.localStorage.setItem('__token__', '');
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

export type ContextUser = {
  id: string;
  token: string;
  username: string;
};
