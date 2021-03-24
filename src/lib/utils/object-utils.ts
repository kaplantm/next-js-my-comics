/* eslint-disable import/prefer-default-export */
import safeStringify from "json-stringify-safe";

export const nullSafeStringify = (entity: any) =>
  entity ? safeStringify(entity || null) : null;

/**
 * manually circumvent NextJS object serialization which produces circular reference issues
 * seems to be an issue with contentful SDK https://github.com/contentful/contentful.js/issues?q=is%3Aissue+circular
 * @param entity
 */
export const getSafeObject = (entity: any) => {
  const safeStr = nullSafeStringify(entity);
  return safeStr ? JSON.parse(safeStr) : null;
};
