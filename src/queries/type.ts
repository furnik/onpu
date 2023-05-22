import {gql} from '@apollo/client';

//Детальний опис запитів на сервер

export const CreateTypeQuery = gql`
  mutation createType($en: String!, $ua: String!) {
    createType(input: {en: $en, ua: $ua}) {
      id
      en
      ua
    }
  }
`;
export const UpdateTypeQuery = gql`
  mutation updateType($id: ID!, $en: String!, $ua: String!) {
    updateType(input: {id: $id, en: $en, ua: $ua}) {
      id
      en
      ua
    }
  }
`;
export const DeleteTypeQuery = gql`
  mutation deleteType($id: ID!) {
    deleteType(input: {id: $id})
  }
`;
export const GetTypeQuery = gql`
   query getTypes {
    getTypes {
      id
      en
      ua
    }
  }
`;
