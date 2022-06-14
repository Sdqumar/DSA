function binary_search(list, target) {
  let first = 0;
  let last = numbers.length - 1;

  while (first <= last) {
    let midpoint = Math.round((first + last) / 2);
    if (list[midpoint] == target) {
      return midpoint;
    }
    if (list[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }
  return -1;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = binary_search(numbers, 11);

console.log(result);
