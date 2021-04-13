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

export function stringToHex(str: string) {
  if (!str) {
    return null;
  }
  const { h, s, l } = str.split("").reduce(
    (acc, char) => {
      acc.h += char.charCodeAt(0);
      acc.s = char.charCodeAt(0);
      if (!acc.l) {
        acc.l = char.charCodeAt(0);
      }
      return acc;
    },
    { h: 0, s: 0, l: 0 }
  );
  const a = str.charCodeAt(Math.ceil(str.length / 2)) / 100;
  return `hsla(${h % 300},${Math.max(20, s / 2)}%,${l % 90}%,${a + 0.2})`;
}
