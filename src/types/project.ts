import {FormFields} from '../constants/project';
import {CommonT} from './common';

export type Project = {
  status: string;
  en: {
    specialities: Array<string>;
    title: string;
    description: string;
    authors: Array<string>;
    managers: Array<string>;
    types: Array<string>;
    tags: Array<string>;
    link: string,
    year: string
  };
  ua: {
    specialities: Array<string>;
    title: string;
    description: string;
    authors: Array<string>;
    managers: Array<string>;
    types: Array<string>;
    tags: Array<string>;
    link: string,
    year: string
  };
}

export type TProject = Project & {
  id: string;
}

export type TProjectError = {
  [FormFields.specialities]: string;
  [FormFields.title]: string;
  [FormFields.description]: string;
  [FormFields.authors]: string;
  [FormFields.managers]: string;
  [FormFields.types]: string;
  [FormFields.tags]: string;
  [FormFields.link]: string,
  [FormFields.year]: string
}

export type Fields = {
  [FormFields.specialities]: Array<string>;
  [FormFields.title]: string;
  [FormFields.description]: string;
  [FormFields.authors]: Array<string>;
  [FormFields.managers]: Array<string>;
  [FormFields.types]: Array<string>;
  [FormFields.tags]: Array<string>;
  [FormFields.link]: string,
  [FormFields.year]: string
}

export type CreateProjectType = {
  id?: string;
  status: string;
  en: Fields;
  ua: Fields;
}

export type TSearch = {
  search: string;
  year: string;
  type: Array<string>;
  speciality: Array<string>;
}

export type TGetSearch = {
  getSearch: {
    types: Array<CommonT>;
    specialities: Array<CommonT>;
    years: Array<string>;
  }
}

export type TGetProjects = {
  getProjects: {
    projects: Array<TProject>
    count: number;
  }
}
