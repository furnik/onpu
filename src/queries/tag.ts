import {gql} from '@apollo/client';

//Детальний опис запитів на сервер

export const CreateTagQuery = gql`
  mutation createTag($en: String!, $ua: String!) {
    createTag(input: {en: $en, ua: $ua}) {
      id
      en
      ua
    }
  }
`;
export const UpdateTagQuery = gql`
  mutation updateTag($id: ID!, $en: String!, $ua: String!) {
    updateTag(input: {id: $id, en: $en, ua: $ua}) {
      id
      en
      ua
    }
  }
`;
export const DeleteTagQuery = gql`
  mutation deleteTag($id: ID!) {
    deleteTag(input: {id: $id})
  }
`;
export const GetTagQuery = gql`
   query getTags {
    getTags {
      id
      en
      ua
    }
  }
`;
