const searchInsert = function (nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        }
    }
    return low;
};