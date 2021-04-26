/** True if value is null, undefined or a whitespace only string */
export const isBlank = (value?: any) => {
  if (typeof value === "string") {
    return (value || "").trim() === "";
  }
  return value === null || value === undefined;
};

function hashCode(str: string) {
  // java String#hashCode
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function stringToHSLAColor(str: string, alpha?: number) {
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
  return `hsla(${h % 300},${Math.max(20, s / 2)}%,${l % 90}%,${
    alpha || a + 0.2
  })`;
}

const monthYearRegex = /([A-z]*, \d\d\d\d)$/i;

enum monthsEnum {
  january = 0,
  feburary = 0,
  march = 0,
  april = 0,
  may = 0,
  june = 0,
  july = 0,
  august = 0,
  september = 0,
  october = 0,
  november = 0,
  december = 0,
}

// Add ability to parse dates in "May, 1999" format since thats the format we most commonly get from the dc wiki
export const parseDateFromMarkdownString = (dateString: string): Date => {
  let date = new Date(dateString);
  if (date.getTime()) {
    return date;
  }
  if (monthYearRegex.test(dateString)) {
    const [month, year] = dateString.split(", ");
    date = new Date(parseInt(year), monthsEnum[month.toLowerCase()], 1);
  }
  return date;
};
