import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FaTimes } from 'react-icons/fa';
import { config } from '../config';

import { Loading } from './Loading';
import logo from '../assets/logo.svg';

import '../styles/FormModal.scss';
import { Context } from '../context';
import { useCreateUser } from '../hooks/useCreateUser';
import { useNavigate } from 'react-router-dom';

export const FormModal: React.FC<FormModalProps> = ({ modal, setModal }) => {
  const { addUser } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const { createUser, data } = useCreateUser();
  const form = useRef(null);
  const navigate = useNavigate();

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
        navigate('/');
      }
    }
    if (modal === 'signup') {
      const formData = new FormData(form.current as unknown as HTMLFormElement);
      const input = {
        email: formData.get('email'),
        password: formData.get('password'),
        username: formData.get('username'),
      };
      createUser({ variables: { input } });
    }
  };

  useEffect(() => {
    if (data && form.current) {
      //@ts-ignore
      form.current.email.value = '';
      //@ts-ignore
      form.current.password.value = '';
      setModal('login');
    }
  }, [data]);

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
