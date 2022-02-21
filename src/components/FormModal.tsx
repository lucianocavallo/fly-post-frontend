import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react';
import { FaTimes } from 'react-icons/fa';
import { config } from '../config';

import { Loading } from './Loading';
import logo from '../assets/logo.svg';

import '../styles/FormModal.scss';
import { Context } from '../context';

export const FormModal: React.FC<FormModalProps> = ({ modal, setModal }) => {
  const { addUser } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    if (modal === 'login') {
      const formData = new FormData(form.current as unknown as HTMLFormElement);
      const reqBody = {
        email: formData.get('email'),
        password: formData.get('password'),
      };
      const res = await fetch(`${config.apiUrl}/api/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      });
      if (res.status === 200) {
        const data = await res.json();
        addUser(data);
      }
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
        <form ref={form} onSubmit={handleSubmit}>
          {modal === 'signup' && (
            <>
              <label htmlFor="username">Username: </label>
              <input required type="text" id="username" name="username" />
            </>
          )}
          <label htmlFor="email">Email: </label>
          <input required type="text" id="email" name="email" />
          <label htmlFor="password">Password: </label>
          <input required type="password" id="password" name="password" />
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
