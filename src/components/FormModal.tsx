import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import { Loading } from './Loading';
import logo from '../assets/logo.svg';

import '../styles/FormModal.scss';

export const FormModal: React.FC<FormModalProps> = ({ modal, setModal }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (modal === 'login') {
      alert(modal);
    }
    if (modal === 'signup') {
      alert(modal);
    }
  };

  return (
    <div className="FormModal-container">
      <div className="FormModal">
        <button className="FormModal__close" onClick={() => setModal('')}>
          <FaTimes size={20} />
        </button>
        <img src={logo} alt="" className="FormModal__logo" />
        <form onSubmit={handleSubmit}>
          {modal === 'signup' && (
            <>
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" name="username" />
            </>
          )}
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
          {loading && <Loading />}
          <button>{modal}</button>
        </form>
      </div>
    </div>
  );
};

type FormModalProps = {
  modal: string;
  setModal: Dispatch<SetStateAction<string>>;
};
