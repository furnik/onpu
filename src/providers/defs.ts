//Опис типів для запитів на сервер

export const typeDefs = `#graphql  
  type Translate {
    id: ID
    en: String
    ua: String
  }
  
  type ProjectShort {
    title: String
    description: String
    year: String
    specialities: [String]
    authors: [String]
    managers: [String]
    types: [String]
    tags: [String]
    link: String
  }
  
  type Project {
    id: ID
    status: String
    en: ProjectShort
    ua: ProjectShort
  }
  
  type TranslateProject {
    id: ID
    status: String
    en: Project
    ua: Project
  }

  type User {
    id: ID
    username: String
    password: String
  }
  
  input CreateUserInput {
    username: String!
    password: String!
  }
  
  input UpdateUserInput {
    username: ID!
    password: String!
    newPassword: String!
  }
  
  input LoginInput {
    username: String!
    password: String!
  }
  
  input DeleteUserInput {
    id: ID!
  }
  
  input CreateTranslateInput {
    en: String!
    ua: String!
  }
  input UpdateTranslateInput {
    id: ID!
    en: String!
    ua: String!
  }
  input DeleteTranslateInput {
    id: ID!
  }
  
  input ProjectInput {
    title: String!
    description: String!
    year: String!
    specialities: [String]!
    authors: [String]!
    managers: [String]!
    types: [String]!
    tags: [String]!
    link: String!
  }
  
  input CreateProjectInput {
    status: String!
    en: ProjectInput!
    ua: ProjectInput!
  }
  
  input UpdateProjectInput {
    id: ID!
    status: String!
    en: ProjectInput!
    ua: ProjectInput!
  }
  
  input DeleteProjectInput {
    id: ID!
  }
  
  input GetProjectInput {
    search: String
    speciality: [String]
    year: String
    type: [String]
  }
  
  type SearchResponse {
    specialities: [Translate]
    types: [Translate]
    years: [String]
  }
  
  type ProjectsResponse {
    projects: [Project]
    count: Int
  }
  
  type Query {
    getSearch: SearchResponse
    getTags: [Translate]
    getSpecialities: [Translate]
    getTypes: [Translate]
    getProjects(input: GetProjectInput): ProjectsResponse
    getAllProjects: [Project]
  }
  
  type Mutation {
    createUser(input: CreateUserInput): User
    deleteUser(input: DeleteUserInput): Boolean
    updateUser(input: UpdateUserInput): User
    
    login(input: LoginInput): User
    
    createTag(input: CreateTranslateInput): Translate
    updateTag(input: UpdateTranslateInput): Translate
    deleteTag(input: DeleteTranslateInput): Boolean
    
    createSpeciality(input: CreateTranslateInput): Translate
    updateSpeciality(input: UpdateTranslateInput): Translate
    deleteSpeciality(input: DeleteTranslateInput): Boolean
    
    createType(input: CreateTranslateInput): Translate
    updateType(input: UpdateTranslateInput): Translate
    deleteType(input: DeleteTranslateInput): Boolean
    
    createProject(input: CreateProjectInput): Project
    updateProject(input: UpdateProjectInput): Project
    deleteProject(input: DeleteProjectInput): Boolean
  }
`;
