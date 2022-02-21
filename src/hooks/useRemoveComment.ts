import { gql, useMutation } from '@apollo/client';

const REMOVE_COMMENT = gql`
  mutation RemoveComment($id: ID!) {
    removeComment(id: $id) {
      id
      comment
    }
  }
`;

export const useRemoveComment = () => {
  const [removeComment, { data, loading, error }] = useMutation(
    REMOVE_COMMENT,
    {
      refetchQueries: 'active',
    }
  );

  return { removeComment, data, loading, error };
};
