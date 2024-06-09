export const size = (multiplier = 1) => {
  const baseUnit = 8;
  return `${multiplier * baseUnit}px`;
};
