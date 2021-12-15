// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersect = function(nums1, nums2) {
    let map = {};
    let intersection = [];
    // Add num1 to map object and count each occurence.
    for (let i = 0; i < nums1.length; i++) {
        if (!(nums1[i] in map)) {
            map[nums1[i]] = 1;
        } else {
            map[nums1[i]] += 1;
        }
    }
    // Check if num2 exists in map and that there are still occurences not utilized. 
    for (let i = 0; i < nums2.length; i++) {
        if ((nums2[i] in map) && map[nums2[i]] > 0) {
            intersection.push(nums2[i]);
            map[nums2[i]] -= 1;
        }
    }
    
    return intersection;
};