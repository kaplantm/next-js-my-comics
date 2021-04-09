export function sortObjectArrayAlphabeticallyBy(
  // eslint-disable-next-line @typescript-eslint/ban-types
  array: any[],
  sortKey: string,
  presortKey?: string
) {
  return array.sort((a, b) => {
    const presortKeyValueA = (presortKey ? a[presortKey] : a) || {};
    const valueA =
      typeof presortKeyValueA[sortKey] === "string"
        ? presortKeyValueA[sortKey].toUpperCase()
        : presortKeyValueA[sortKey]; // ignore upper and lowercase

    const presortKeyValueB = (presortKey ? b[presortKey] : b) || {};
    const valueB =
      presortKeyValueB[sortKey] === "string"
        ? presortKeyValueB[sortKey].toUpperCase()
        : presortKeyValueB[sortKey]; // ignore upper and lowercase
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

export function shuffleArray(arr: any[]) {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}
