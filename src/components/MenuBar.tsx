import logo from '../assets/logo.svg';
import { FaHome, FaRegUser, FaFeather } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import '../styles/MenuBar.scss';

const size = 35;

export const MenuBar: React.FC = () => {
  return (
    <ul className="MenuBar">
      <li>
        <button>
          <img src={logo} alt="" />
        </button>
      </li>
      <li>
        <Link to="/">
          <FaHome size={size} />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/user">
          <FaRegUser size={size} />
          <span>My account</span>
        </Link>
      </li>
      <li>
        <Link className="MenuBar__NewPost" to="/new-post">
          <span>Post</span>
          <FaFeather size={size} className="MenuBar__PostFeather" />
        </Link>
      </li>
    </ul>
  );
};
