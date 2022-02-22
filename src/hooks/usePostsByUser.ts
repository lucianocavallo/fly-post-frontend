import { gql, useQuery } from '@apollo/client';

const GET_POSTS_BY_USER = gql`
  query PostsById($userId: ID) {
    postsById(userId: $userId) {
      id
      body
      comments {
        id
        comment
        user {
          username
          id
        }
      }
      user {
        id
        username
      }
      usersLikes {
        id
        username
      }
    }
  }
`;

export const usePostsByUser = (userId: string) => {
  const { data, loading, error } = useQuery(GET_POSTS_BY_USER, {
    variables: { userId },
  });

  return { data, loading, error };
};
