/* eslint-disable import/prefer-default-export */

export const getMonthYear = (date: string | Date, short?: boolean) => {
  const convertedDate = typeof date === 'string' ? new Date(date) : date;
  const year = convertedDate.getFullYear();
  if (short) {
    return `${year}`;
  }
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    convertedDate
  );
  return `${month}, ${year}`;
};
