import contentTypesEnum from "./content-types";

export const contentBlocksMap = {
  // [contentTypesEnum.INTERIOR_HERO]: InteriorHero,
};

export default function getComponentForContentType(c: string) {
  const Component = contentBlocksMap[c];
  return Component || null;
}
