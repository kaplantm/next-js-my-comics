/** True if value is null, undefined or a whitespace only string */
export const isBlank = (value?: any) => {
  if (typeof value === 'string') {
    return (value || '').trim() === '';
  }
  return value === null || value === undefined;
};

const savedColorStrings = {
  'Four of a Kind0.25': 'hsla(160,55%,73%,0.25)',
  'Batman: Year One0.25': 'hsla(208,50%,66%,0.25)',
  'Shaman0.25': 'hsla(70,55%,83%,0.25)',
  'Gothic0.25': 'hsla(6,49.5%,71%,0.25)',
  'Batman: Prodigal0.25': 'hsla(200,50%,45%,0.25)',
  'Batman: Cataclysm0.25': 'hsla(114,54.5%,66%,0.25)',
  "Batman: Road to No Man's Land0.25": 'hsla(40,50%,66%,0.25)',
  "Batman: No Man's Land0.25": 'hsla(259,50%,66%,0.25)',
};
export function stringToHSLAColor(str: string, alpha?: number) {
  if (!str) {
    return null;
  }
  const key = `${str}${alpha}`;
  const cached = savedColorStrings[key];
  if (cached) {
    return cached;
  }
  const { h, s, l } = str.split('').reduce(
    (acc, char) => {
      const charCode = char.charCodeAt(0);
      acc.h += charCode;
      acc.s = charCode;
      if (!acc.l) {
        acc.l = charCode;
      }
      return acc;
    },
    { h: 0, s: 0, l: 0 }
  );

  const a = str.charCodeAt(Math.ceil(str.length / 2)) / 100;
  const color = `hsla(${h % 300},${Math.max(20, s / 2)}%,${l % 90}%,${
    alpha || a + 0.2
  })`;
  savedColorStrings[key] = color;
  return color;
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
    const [month, year] = dateString.split(', ');
    date = new Date(parseInt(year), monthsEnum[month.toLowerCase()], 1);
  }
  return date;
};

export function insert(str: string, index: number, value: string) {
  return str.substr(0, index) + value + str.substr(index);
}
