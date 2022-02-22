import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { config } from '../config';

import logo from '../assets/logo.svg';
import { Loading } from './Loading';
import { Error } from './Error';
import { Context } from '../context';
import { useCreateUser } from '../hooks/useCreateUser';
import { loginSchema, signupSchema } from '../utils/yupSchemas';

import '../styles/FormModal.scss';

export const FormModal: React.FC<FormModalProps> = ({ modal, setModal }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { addUser } = useContext(Context);
  const { createUser, data } = useCreateUser();
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    if (modal === 'login') {
      const formData = new FormData(form.current as unknown as HTMLFormElement);
      const loginBody = {
        email: formData.get('email'),
        password: formData.get('password'),
      };
      loginSchema
        .validate(loginBody)
        .then(async () => {
          setLoading(true);
          const res = await fetch(`${config.apiUrl}/api/login`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginBody),
          });
          if (res.status === 200) {
            setLoading(false);
            const data = await res.json();
            addUser(data);
            navigate('/');
          }
        })
        .catch((e) => setError(e.message));
    }
    if (modal === 'signup') {
      const formData = new FormData(form.current as unknown as HTMLFormElement);
      const input = {
        email: formData.get('email'),
        password: formData.get('password'),
        username: formData.get('username'),
      };
      signupSchema
        .validate(input)
        .then(() => createUser({ variables: { input } }))
        .catch((e) => setError(e.message));
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

  const handleOnChange = () => {
    if (error) setError('');
    if (loading) setLoading(false);
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
              <input
                required
                type="text"
                id="username"
                name="username"
                onChange={handleOnChange}
              />
            </>
          )}
          <label htmlFor="email">Email: </label>
          <input
            required
            type="text"
            id="email"
            name="email"
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            onChange={handleOnChange}
          />
          {loading && <Loading />}
          {error && <Error error={error} />}
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
