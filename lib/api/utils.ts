/* eslint-disable import/prefer-default-export */
export const getConnectDisconnectOneToOne = (id: number) => {
  if (id === undefined) {
    return undefined;
  }
  if (id === null) {
    return { disconnect: true };
  }
  return { connect: { id } };
};
