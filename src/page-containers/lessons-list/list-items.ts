import { routeMap } from "../../lib/constants/routes";
import { mappedRouteType } from "../../lib/types";

export enum categoriesEnum {
  next = "NextJS",
  material = "Material UI",
  hooks = "Hooks",
  tinyMce = "TinyMCE",
  axios = "Axios",
  utils = "Utils",
  javscript = "JS Fundamentals",
  react = "React Fundamentals",
  other = "Other",
  resources = "Resources",
}

export const allCategories = Object.values(categoriesEnum);

export type lessonsListItemType = {
  text: string;
  categories: categoriesEnum[];
  links?: mappedRouteType[];
};

export const lessonsListItems: lessonsListItemType[] = [
  {
    text: "In NextJS, the useEffect hook executes client side",
    categories: [categoriesEnum.next, categoriesEnum.hooks],
  },
];
