export const comparePosition = (
  position1: [number, number],
  position2: [number, number] | null
): boolean => {
  return position2
    ? position1[0] === position2[0] && position1[1] === position2[1]
    : false;
};
