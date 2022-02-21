import { FormEventHandler, useRef, useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';

import { CommentItem } from './CommentItem';
import type { Comment } from './CommentItem';
import { useCreateComment } from '../hooks/useCreateComment';

import '../styles/CommentsList.scss';

export const CommentsList: React.FC<CommentsListProps> = ({
  comments,
  postId,
  userId,
}) => {
  const form = useRef(null);
  const { createComment } = useCreateComment();
  const [showNewComment, setShowNewComment] = useState(false);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current as unknown as HTMLFormElement);
    const comment = formData.get('comment');
    createComment({
      variables: {
        input: {
          comment,
          userId,
          postId,
        },
      },
    });
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
          />
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

// update: (cache, { data: createComment }) => {
//   cache.modify({
//     fields: {
//       posts(existingPosts = [], { readField }) {
//         console.log(existingPosts);
//         console.log({ createComment });
//         const existingPostsCopy = [...existingPosts];

//         const index = existingPosts.findIndex(
//           (post: any) => readField('id', post) === postId
//         );

//         const post = existingPosts[index];
//         let comments = readField('comments', post) as string[];
//         comments = [...comments, createComment];
//         const updatedPost = { ...post };
//         updatedPost.comments = comments;
//         existingPostsCopy[index] = updatedPost;
//         console.log({ post });
//         console.log({ comments });
//         console.log({ updatedPost });
//         console.log({ existingPostsCopy });

//         // const newPost = cache.writeQuery({
//         //   data: createPost,
//         //   query: CREATE_POST,
//         // });
//         return [...existingPostsCopy];
//       },
//     },
//   });
// },
