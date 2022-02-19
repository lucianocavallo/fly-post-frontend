import logo from '../assets/logo.svg';

import '../styles/NotRegistered.scss';

export const NotRegistered: React.FC = () => {
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
            <button>Signup</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
