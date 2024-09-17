const twoSum = function (nums, target) {
  const hashmap = new Map();
  for(let index = 0; index < nums.length; index++){
    let diff = target - nums[index];
    if(hashmap.has(diff))
      return[index, hashmap.get(diff)];
    else
      hashmap.set(nums[index], index);
  }
};

console.log(twoSum([3, 4, 5, 6], 7));
console.log(twoSum([4, 5, 6], 10));
