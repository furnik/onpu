import {gql} from '@apollo/client';

//Детальний опис запитів на сервер

export const CreateSpecialityQuery = gql`
  mutation createSpeciality($en: String!, $ua: String!) {
    createSpeciality(input: {en: $en, ua: $ua}) {
      id
      en
      ua
    }
  }
`;
export const UpdateSpecialityQuery = gql`
  mutation updateSpeciality($id: ID!, $en: String!, $ua: String!) {
    updateSpeciality(input: {id: $id, en: $en, ua: $ua}) {
      id
      en
      ua
    }
  }
`;
export const DeleteSpecialityQuery = gql`
  mutation deleteSpeciality($id: ID!) {
    deleteSpeciality(input: {id: $id})
  }
`;
export const GetSpecialityQuery = gql`
   query getSpecialities {
    getSpecialities {
      id
      en
      ua
    }
  }
`;
