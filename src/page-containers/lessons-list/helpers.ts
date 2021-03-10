import { allCategories, categoriesEnum, lessonsListItems } from "./list-items";

export type tagStateType = { [key in categoriesEnum]: false };

export function getInitialState() {
  return allCategories.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {}) as tagStateType;
}

export function getDisplayItems(tags: tagStateType) {
  const activeCategories = allCategories.filter((category) => tags[category]);
  if (!activeCategories.length) {
    return lessonsListItems;
  }
  const filteredItems = lessonsListItems.filter((item) =>
    activeCategories.every((category) => item.categories.includes(category))
  );
  return filteredItems;
}
