import type { Comment } from './CommentItem';
import { dateConverter } from '../utils/dateConverter';

import { FaRegHeart, FaHeart, FaRegComments } from 'react-icons/fa';

import { CommentsList } from './CommentsList';

import '../styles/PostItem.scss';
import { useState } from 'react';
import { useToggleLike } from '../hooks/useToggleLike';

export const PostItem: React.FC<PostItemProps> = ({
  id,
  user,
  body,
  comments,
  usersLikes,
  loggedUser,
}) => {
  const { toggleLike } = useToggleLike();
  const [showComments, setShowComments] = useState(false);
  const liked = usersLikes.some((user) => user.id === loggedUser.id);

  const handleToggleLike = () => {
    toggleLike({ variables: { postId: id, userId: loggedUser.id } });
  };

  return (
    <div className="PostItem">
      <div className="PostItem__User">
        <span>{user.username}</span>
        <span>&nbsp;&nbsp;27-02-2022{/*dateConverter(createdAt)*/}</span>
      </div>
      <div className="PostItem__Body">
        <p>{body}</p>
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
      {showComments && <CommentsList comments={comments} />}
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
