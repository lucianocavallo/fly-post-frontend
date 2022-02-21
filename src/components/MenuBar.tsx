import logo from '../assets/logo.svg';
import { FaHome, FaRegUser, FaFeather } from 'react-icons/fa';

import { Link, NavLink } from 'react-router-dom';

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
        <NavLink className="actual" to="/">
          <FaHome size={size} />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="actual" to="/user">
          <FaRegUser size={size} />
          <span>My account</span>
        </NavLink>
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
