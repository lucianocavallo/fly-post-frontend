import { gql, useMutation } from '@apollo/client';

const TOGGLE_LIKE = gql`
  mutation TogglePostLike($postId: ID!, $userId: ID!) {
    togglePostLike(postId: $postId, userId: $userId) {
      id
      body
      user {
        id
        email
      }
      usersLikes {
        id
        username
      }
    }
  }
`;

export const useToggleLike = () => {
  const [toggleLike, { data, loading, error }] = useMutation(TOGGLE_LIKE);

  return { toggleLike, data, loading, error };
};
