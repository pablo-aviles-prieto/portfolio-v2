export const getOddItemsFromArray = <T>(data: T[]) => {
  return data.filter((_, index) => index % 2 !== 0);
};
