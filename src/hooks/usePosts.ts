import { gql, useQuery } from '@apollo/client';

export const GET_POSTS = gql`
  query Posts($limit: String, $offset: String) {
    posts(limit: $limit, offset: $offset) {
      id
      body
      user {
        id
        username
      }
      usersLikes {
        id
        username
      }
      comments {
        id
        comment
        user {
          id
          username
        }
      }
    }
  }
`;

export const usePosts = (limit?: string, offset?: string) => {
  const { data, loading, error, refetch, fetchMore } = useQuery(GET_POSTS, {
    fetchPolicy: 'cache-and-network',
    variables: { limit, offset },
  });
  return { data, loading, error, refetch, fetchMore };
};
