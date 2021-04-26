/* eslint-disable import/prefer-default-export */

// Fix for inconsistent rounding using normal toFixed
// https://stackoverflow.com/a/23560569
export function stableToFixed(num: number, precision = 2) {
  return (+`${Math.round(+`${num}e${precision}`)}e${-precision}`).toFixed(
    precision
  );
}
