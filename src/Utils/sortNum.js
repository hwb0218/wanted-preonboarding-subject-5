export const sort = (array, num = 1) => {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;

    while (left >= 0 && num * array[left] > num * cur) {
      array[left + 1] = array[left];
      array[left] = cur;
      cur = array[left];
      left--;
    }
  }
  return [...array].join(", ");
};
