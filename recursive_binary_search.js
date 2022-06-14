function recursive_binary_search(list, target) {
  if (list.length === 1 && list[0] != target) {
    return false;
  }
  const mid = Math.floor(list.length / 2);

  if (list[mid] == target) {
    return true;
  } else {
    if (list[mid] < target) {
      const newList = list.slice(mid);
      return recursive_binary_search(newList, target);
    } else {
      const newList = list.slice(0, mid);
      return recursive_binary_search(newList, target);
    }
  }
}
const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = recursive_binary_search(numbers, 5);
console.log(result);
