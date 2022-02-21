import { gql, useMutation } from '@apollo/client';

import { GET_POSTS } from './usePosts';

const CREATE_POST = gql`
  mutation CreatePost($body: String!, $userId: ID!) {
    createPost(body: $body, userId: $userId) {
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

export const useCreatePost = () => {
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST, {
    update: (cache, { data: createPost }) => {
      cache.modify({
        fields: {
          posts(existingPosts = []) {
            const newPost = cache.writeQuery({
              data: createPost,
              query: CREATE_POST,
            });
            return [...existingPosts, newPost];
          },
        },
      });
    },
  });

  return { createPost, data, loading, error };
};
