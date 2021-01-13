export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map(parseInt);
  return new Date(year, month - 1, day);
};
