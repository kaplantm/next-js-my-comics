/** True if value is null, undefined or a whitespace only string */
export const isBlank = (value?: any) => {
  if (typeof value === "string") {
    return (value || "").trim() === "";
  }
  return value === null || value === undefined;
};
