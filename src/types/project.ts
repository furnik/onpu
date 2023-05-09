export type TProject = {
  id: string;
  specialties: Array<string>;
  title: string;
  description: string;
  authors: Array<string>;
  managers: Array<string>;
  types: Array<string>;
  tags: Array<string>;
  link: {
    url: string;
    name: string;
  },
  year: string
}
