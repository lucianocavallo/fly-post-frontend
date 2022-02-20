import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
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
  if (limit && offset) {
    const { data, loading, error, refetch } = useQuery(GET_POSTS, {
      variables: {
        limit,
        offset,
      },
    });
    return { data, loading, error, refetch };
  } else {
    const { data, loading, error, refetch } = useQuery(GET_POSTS);
    return { data, loading, error, refetch };
  }
};
