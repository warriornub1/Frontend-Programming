const hasDuplicate = function (num) {
  const hashset = new Set();
  for (let i of num) {
    if (hashset.has(i)) return true;
    else hashset.add(i);
  }
  return false;
};

console.log(hasDuplicate([1, 2, 3, 4]));
console.log(hasDuplicate([1, 2, 3, 3]));
