// Fix for inconsistent rounding using normal toFixed
// https://stackoverflow.com/a/23560569
export function stableToFixed(num: number, precision: number = 2) {
  return (+`${Math.round(+`${num}e${precision}`)}e${-precision}`).toFixed(
    precision
  );
}
