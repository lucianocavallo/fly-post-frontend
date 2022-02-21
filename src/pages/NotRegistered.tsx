import { useContext, useEffect, useState } from 'react';
import { FormModal } from '../components/FormModal';
import logo from '../assets/logo.svg';

import '../styles/NotRegistered.scss';
import { Context } from '../context';

export const NotRegistered: React.FC = () => {
  const [showModal, setShowModal] = useState('');
  const { user, addUser } = useContext(Context);

  useEffect(() => {
    if (!user) {
      const user = JSON.parse(
        window.localStorage.getItem('__token__') as string
      );
      addUser(user);
    }
  }, []);

  return (
    <div className="NotRegistered">
      <div className="NotRegistered__Welcome">
        <img src={logo} alt="" />
      </div>
      <div className="NotRegistered__Menu_Grid">
        <div className="NotRegistered__Menu">
          <img src={logo} alt="" />
          <h2>
            What's happening
            <br />
            right now
          </h2>
          <h3>A micro-twitter app, join now</h3>
          <div className="NotRegistered__Buttons">
            <button onClick={() => setShowModal('signup')}>Signup</button>
            <button onClick={() => setShowModal('login')}>Login</button>
          </div>
        </div>
      </div>
      {showModal && <FormModal modal={showModal} setModal={setShowModal} />}
    </div>
  );
};
