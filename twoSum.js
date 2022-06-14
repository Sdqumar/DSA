const twoSum = (nums, target) => {
  const hash = {};

  for (i of nums.keys()) {
    const complement = target - nums[i];

    // if (hash.hasOwnProperty(complement)) {
    //   return [hash[complement], i];
    // }

    if(complement in hash){
        return [hash[complement],i]
    }
    hash[nums[i]] = i;
  }
};

const nums = [2, 5, 7, 8, 3, 20];

console.log(twoSum(nums, 25));
