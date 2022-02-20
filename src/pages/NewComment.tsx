import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/NewComment.scss';

export const NewComment: React.FC = () => {
  return (
    <div className="NewComment_container">
      <div className="NewComment">
        <Link className="NewComment__back" to="/">
          <FaArrowLeft size={18} color="black" />
        </Link>
        <form className="NewComment__form">
          <label htmlFor="post">Fly your comment: </label>
          <textarea id="post" name="post" />
          <button>comment</button>
        </form>
      </div>
    </div>
  );
};
