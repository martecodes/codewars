const searchRange = function (nums, target, l = 0, r = nums.length - 1, ans = -1) {
	if (nums[l] == target && nums[r] == target) return [l, r];
	if (l >= r) return [ans, ans];
	const mid = Math.floor((l + r) / 2);
	if (nums[mid] > target)
		return searchRange(nums, target, l, mid - 1, ans);
	else if (nums[mid] < target)
		return searchRange(nums, target, mid + 1, r, ans);
	else
		return [
			searchRange(nums, target, l, mid - 1, mid)[0],
			searchRange(nums, target, mid + 1, r, mid)[1],
		];
}