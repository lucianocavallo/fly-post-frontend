import { createContext, useState } from 'react';

const initialContext = {
  user: undefined,
  addUser: () => {},
  removeUser: () => {},
};

export const Context = createContext<ContextProps>(initialContext);

export const ContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const addUser = () => {};

  const removeUser = () => {};

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
  user:
    | {
        id: string;
        username: string;
        token: string;
        email: string;
      }
    | undefined;
  addUser: () => void;
  removeUser: () => void;
};
