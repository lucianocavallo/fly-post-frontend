import logo from '../assets/logo.svg';

import '../styles/MenuBar.scss';

export const MenuBar: React.FC = () => {
  return (
    <div className="MenuBar">
      <figure>
        <img src={logo} />
      </figure>
    </div>
  );
};
