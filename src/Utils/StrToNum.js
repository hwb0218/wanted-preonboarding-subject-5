export const strToNum = (textContent) => {
  return textContent
    .split(",")
    .filter((num) => num.trim() !== "")
    .map((num) => Number(num));
};
