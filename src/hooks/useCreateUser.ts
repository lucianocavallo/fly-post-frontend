import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
      email
      username
      password
    }
  }
`;

export const useCreateUser = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  return { createUser, data, loading, error };
};
