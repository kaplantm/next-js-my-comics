import { Asset, Entry } from "contentful";

export type LinkEntry = Entry<{
  //TODO: needed?
  targetInternal: string; // string in case of circular reference
  targetExternal: string;
  text: string;
}>;

export type ContributorRoles =
  | "Writer"
  | "Inker"
  | "penciller"
  | "Editor"
  | "Letterer"
  | "Colorist";

export type Contributor = Entry<{
  name: string;
  roles: ContributorRoles[];
}>;

export type Issue = Entry<{
  name: string;
  slug: string;
  description: string;
  contributors: Contributor[];
  startYear: number;
  endYear: number;
  cover: Asset;
  series: Series;
  panels: Asset[];
}>;

export type Series = Entry<{
  name: string;
  slug: string;
  description: string;
  contributors: Contributor[];
  startYear: number;
  endYear: number;
  cover: Asset;
  issues: Issue;
}>;
