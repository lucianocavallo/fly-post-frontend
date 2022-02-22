import { FormEventHandler, useRef, useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';

import { CommentItem } from './CommentItem';
import type { Comment } from './CommentItem';
import { Error } from './Error';
import { useCreateComment } from '../hooks/useCreateComment';
import { createCommentSchema } from '../utils/yupSchemas';

import '../styles/CommentsList.scss';

export const CommentsList: React.FC<CommentsListProps> = ({
  comments,
  postId,
  userId,
}) => {
  const [error, setError] = useState('');
  const form = useRef(null);
  const { createComment } = useCreateComment();
  const [showNewComment, setShowNewComment] = useState(false);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current as unknown as HTMLFormElement);
    const comment = formData.get('comment');

    createCommentSchema
      .validate({ comment })
      .then(() => {
        createComment({
          variables: {
            input: {
              comment,
              userId,
              postId,
            },
          },
        });
      })
      .catch((e) => setError(e.message));
  };

  const handleOnChange = () => {
    if (error) setError('');
  };

  return (
    <div className="CommentsList">
      <button
        className="CommentsList__NewComment"
        onClick={() => setShowNewComment(!showNewComment)}
      >
        <span>Add comment</span>
        <FaRegCommentDots size={25} />
      </button>
      {showNewComment && (
        <form ref={form} onSubmit={handleSubmit} className="CommentsList__form">
          <input
            type="text"
            id="comment"
            name="comment"
            placeholder="your comment here..."
            onChange={handleOnChange}
          />
          {error && <Error error={error} />}
          <button>comment</button>
        </form>
      )}
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
  postId: string;
  userId: string;
};
