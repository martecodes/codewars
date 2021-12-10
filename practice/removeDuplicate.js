// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

const removeDuplicates = function(nums) {
   let cur = 0;
    
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[cur]) continue;
    ++cur;
    nums[cur] = nums[i];
  }
    
  return cur + 1;
    
};