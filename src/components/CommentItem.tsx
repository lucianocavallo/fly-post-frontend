import '../styles/CommentItem.scss';
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import { Context } from '../context';
import { useRemoveComment } from '../hooks/useRemoveComment';

export const CommentItem: React.FC<Comment> = ({ id, comment, user }) => {
  const loggedUser = useContext(Context).user;
  const isOwn = loggedUser?.id === user.id;

  const { removeComment } = useRemoveComment();

  const handleRemoveComment = () => {
    removeComment({ variables: { id } });
  };

  return (
    <div className="CommentItem">
      <h4>{user.username}</h4>
      <div>
        <p>{comment}</p>

        {isOwn && (
          <button onClick={handleRemoveComment}>
            <FaTimes size={18} color="#fa2727" />
          </button>
        )}
      </div>
    </div>
  );
};

export type Comment = {
  id: string;
  comment: string;
  user: {
    id: string;
    username: string;
  };
};
