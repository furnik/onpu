import {gql} from '@apollo/client';

//Детальний опис запитів на сервер

export const LoginQuery = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      id
    }
  }
`;
export const UpdateUserQuery = gql`
  mutation updateUser($input: UpdateUserInput) {
    updateUser(input: $input) {
      id
    }
  }
`;
