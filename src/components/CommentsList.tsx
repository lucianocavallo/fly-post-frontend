import { CommentItem } from './CommentItem';
import { FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import type { Comment } from './CommentItem';
import '../styles/CommentsList.scss';

export const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div className="CommentsList">
      <Link to="/new-comment" className="CommentsList__NewComment">
        <span>Add comment</span>
        <FaRegCommentDots size={25} />
      </Link>
      <div>
        {comments.map((comment) => (
          <CommentItem {...comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

type CommentsListProps = {
  comments: Comment[];
};
