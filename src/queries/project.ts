import {gql} from '@apollo/client';

//Детальний опис запитів на сервер

export const CreateProjectQuery = gql`
  mutation createProject($input: CreateProjectInput) {
    createProject(input: $input) {
      status
    }
  }
`;

export const GetAllProjectsQuery = gql`
  query getAllProjects {
    getAllProjects {
      id
      status
      en {
        title
        description
        year
        specialities
        authors
        managers
        types
        tags
        link
      }
      ua {
        title
        description
        year
        specialities
        authors
        managers
        types
        tags
        link
      }
    }
  }
`;

export const GetProjectsQuery = gql`
  query getProjects($input: GetProjectInput) {
    getProjects(input: $input) {
      count
      projects {
        id
        status
        en {
          title
          description
          year
          specialities
          authors
          managers
          types
          tags
          link
        }
        ua {
          title
          description
          year
          specialities
          authors
          managers
          types
          tags
          link
        }
      }
    }
  }
`;

export const UpdateProjectsQuery = gql`
  mutation updateProject($input: UpdateProjectInput) {
    updateProject(input: $input) {
      status
    }
  }
`;

export const DeleteProjectsQuery = gql`
  mutation deleteProject($input: DeleteProjectInput) {
    deleteProject(input: $input)
  }
`;

export const GetSearchQuery = gql`
  query getSearch {
    getSearch {
      specialities {
        id
        en
        ua
      }
      types {
        id
        en
        ua
      }
      years
    }
  }
`;
