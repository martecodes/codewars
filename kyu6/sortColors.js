const sortColors = function (nums) {

    let low = 0
    let index = 0;
    let high = nums.length - 1;

    while (index <= high) {
        if (nums[index] === 0) {
            [nums[index], nums[low]] = [nums[low], nums[index]];
            low += 1;
        }

        if (nums[index] === 2) {
            [nums[index], nums[high]] = [nums[high], nums[index]];
            high -= 1;
            index -= 1;
        }
        index += 1;
    }
};

/*

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

*/