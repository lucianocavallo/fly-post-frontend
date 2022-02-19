import { dateConverter } from '../utils/dateConverter';

import { FaRegHeart, FaHeart, FaCommentDots } from 'react-icons/fa';

import '../styles/PostItem.scss';

export const PostItem: React.FC<PostItemProps> = ({
  username,
  body,
  createdAt,
}) => {
  return (
    <div className="PostItem">
      <div className="PostItem__User">
        <span>{username}</span>
        <span>&nbsp;&nbsp;{dateConverter(createdAt)}</span>
      </div>
      <div className="PostItem__Body">
        <p>{body}</p>
      </div>
      <ul className="PostItem__FavBar">
        <li>
          <button>
            <FaRegHeart size={25} />
          </button>
          <span>25 likes</span>
        </li>
        <li>
          <button>
            <FaCommentDots size={25} />
          </button>
          <span>3 comments</span>
        </li>
      </ul>
    </div>
  );
};

type PostItemProps = {
  username: string;
  body: string;
  createdAt: string;
};
