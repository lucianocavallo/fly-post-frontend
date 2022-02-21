import { gql, useMutation } from '@apollo/client';

const CREATE_COMMENT = gql`
  mutation CreateComment($input: CommentInput!) {
    createComment(input: $input) {
      id
      comment
    }
  }
`;

export const useCreateComment = () => {
  const [createComment, { data, loading, error }] = useMutation(
    CREATE_COMMENT,
    {
      refetchQueries: 'active',
    }
  );

  return { createComment, data, loading, error };
};

// {
//   "input": {
//     "comment": "Genial!!!",
//     "userId": "1",
//     "postId": "4"
//   }
// }
