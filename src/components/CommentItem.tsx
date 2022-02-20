import '../styles/CommentItem.scss';

export const CommentItem: React.FC<Comment> = ({ id, comment, user }) => {
  return (
    <div className="CommentItem">
      <h4>{user.username}</h4>
      <p>{comment}</p>
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
