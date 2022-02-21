import { gql, useMutation } from '@apollo/client';

const REMOVE_POST = gql`
  mutation RemovePost($removePostId: ID!) {
    removePost(id: $removePostId) {
      id
      body
    }
  }
`;

export const useRemovePost = () => {
  const [removePost, { data, loading, error }] = useMutation(REMOVE_POST, {
    update: (cache, { data: removePost }) => {
      cache.modify({
        fields: {
          posts(existingPosts = [], { readField }) {
            const posts = existingPosts.filter(
              (post: any) => readField('id', post) !== removePost.removePost.id
            );
            return posts;
          },
        },
      });
    },
  });

  return { removePost, data, loading, error };
};
