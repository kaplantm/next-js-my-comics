/** True if value is null, undefined or a whitespace only string */
export const isBlank = (value?: any) => {
  if (typeof value === "string") {
    return (value || "").trim() === "";
  }
  return value === null || value === undefined;
};

function hashCode(str: string) {
  // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function intToHex(i) {
  var c = (i & 0x00ffffff).toString(16).toUpperCase();
  const hex = "00000".substring(0, 6 - c.length) + c;
  return `#${hex}`;
}

export function stringToHex(str: string) {
  if (!str) {
    return null;
  }
  return intToHex(hashCode(str));
}
