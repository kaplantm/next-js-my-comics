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
}
export type lessonsListItemType = {
  text: string;
  categories: categoriesEnum[];
  links?: mappedRouteType[];
};

export const lessonsListItems: lessonsListItemType[] = [
  {
    text: "In NextJS, all hooks execute client side",
    categories: [categoriesEnum.next, categoriesEnum.hooks],
  },
  {
    text: `Do not change the NODE_ENV variable in live envs for a NextJS app. 
When NextJS builds the production (optimized, no live reload) version of the code it sets the NODE_ENV to production. Do not change it.
If you need to detect if you are in a live develop / stage environment, add another environment variable (e.g. INTERNAL_ENV) to signal that. 
Make sure your env variables are set the same at both build time and run time. 
If you are using material UI, you can check if NextJS is running a production or dev build by looking at the build pages source code -
in production, custom classes should be renamed to jss###`,
    categories: [categoriesEnum.next, categoriesEnum.material],
  },
  {
    text:
      "Don't pass down classes. Always import components from the same source.",
    categories: [categoriesEnum.material],
    links: [routeMap.materialCascadeBad],
  },
  {
    text:
      "TinyMCE many crash the site if it receives bad html as its inital data. Use sanitize-html we setting the editor's intial state to prevent this.",
    categories: [categoriesEnum.tinyMce],
    links: [routeMap.materialCascadeBad],
  },
  {
    text:
      "Axios does not wrap their errors, instead you will need a try catch. Consider using a custom wrapper around axios to standardize this throughout your site. See the appAxios method in src/lib/utils/index.ts for example.",
    categories: [categoriesEnum.utils, categoriesEnum.axios],
    links: [routeMap.materialCascadeBad],
  },
  {
    text:
      "For two digit decimal rounding Number.prototype.toFixed() may not be reliable.",
    categories: [categoriesEnum.utils],
    links: [routeMap.rounding],
  },
  {
    text: "Closures can capture old state.",
    categories: [categoriesEnum.javscript, categoriesEnum.hooks],
    links: [
      routeMap.closures,
      {
        name: "Stale Closures with Hooks",
        path: "https://dmitripavlutin.com/react-hooks-stale-closures/",
      },
    ],
  },
  {
    text:
      "Async request may complete after a component has unmounted. Avoid unexpected behavior and memory leak warnings using the useIsMounted hook.",
    categories: [
      categoriesEnum.react,
      categoriesEnum.hooks,
      categoriesEnum.utils,
    ],
    links: [routeMap.isMounted],
  },
  {
    text:
      "Don't bring in libraries until you need them. They can bulk up your project, and you inherit their bugs. ",
    categories: [categoriesEnum.other],
  },
];
