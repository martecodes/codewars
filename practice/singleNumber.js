// Input: nums = [4,1,2,1,2]
// Output: 4

const singleNumber = function(nums) {
    //method to filter out the num that appears once
    //indexOf and lastIndexOf must match to show that is unique
    //filter => indexOf(num) === lastIndexOf(num)
    return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num))
};