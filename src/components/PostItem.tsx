import { useState } from 'react';
import type { Comment } from './CommentItem';
import { dateConverter } from '../utils/dateConverter';

import { FaRegHeart, FaHeart, FaRegComments, FaTimes } from 'react-icons/fa';

import { CommentsList } from './CommentsList';
import { useToggleLike } from '../hooks/useToggleLike';
import { useRemovePost } from '../hooks/useRemovePost';

import '../styles/PostItem.scss';

export const PostItem: React.FC<PostItemProps> = ({
  id,
  user,
  body,
  comments,
  usersLikes,
  loggedUser,
}) => {
  const { toggleLike } = useToggleLike();
  const { removePost } = useRemovePost();
  const [showComments, setShowComments] = useState(false);

  const liked = usersLikes.some((user) => user.id === loggedUser.id);
  const isOwn = user.id === loggedUser.id;

  const handleToggleLike = () => {
    toggleLike({ variables: { postId: id, userId: loggedUser.id } });
  };

  const handleRemovePost = () => {
    removePost({ variables: { removePostId: id } });
  };

  return (
    <div className="PostItem">
      <div className="PostItem__User">
        <span>{user.username}</span>
        <span>&nbsp;&nbsp;27-02-2022{/*dateConverter(createdAt)*/}</span>
      </div>
      <div className="PostItem__Body">
        <p>{body}</p>
        {isOwn && (
          <button onClick={handleRemovePost}>
            <FaTimes size={18} color="#fa2727" />
          </button>
        )}
      </div>
      <ul className="PostItem__FavBar">
        <li>
          <button onClick={handleToggleLike}>
            {liked ? (
              <FaHeart size={25} color="#ff5555" />
            ) : (
              <FaRegHeart size={25} color="#ff5555" />
            )}
          </button>
          <span>{usersLikes.length} likes</span>
        </li>
        <li>
          <button onClick={() => setShowComments(!showComments)}>
            <FaRegComments size={25} />
          </button>
          <span>{comments.length} comments</span>
        </li>
      </ul>
      {showComments && (
        <CommentsList comments={comments} postId={id} userId={loggedUser.id} />
      )}
    </div>
  );
};

type PostItemProps = {
  id: string;
  user: { id: string; username: string };
  body: string;
  createdAt: string;
  comments: Comment[];
  usersLikes: User[];
  loggedUser: {
    id: string;
    username: string;
  };
};

type User = {
  id: string;
};
