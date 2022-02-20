import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/NewPost.scss';

export const NewPost: React.FC = () => {
  return (
    <div className="NewPost_container">
      <div className="NewPost">
        <Link className="NewPost__back" to="/">
          <FaArrowLeft size={18} color="black" />
        </Link>
        <form className="NewPost__form">
          <label htmlFor="post">Fly your post: </label>
          <textarea id="post" name="post" />
          <button>post it</button>
        </form>
      </div>
    </div>
  );
};
