var maxArea = function (height) {
    let l = 0 // l pointer
    let r = height.length - 1 // right pointer
    let res = 0 // result

    while (l < r) { // while left pointer is less than right pointer
        // math max of previous result and current result
            //Math min => to find the height of the shortest line and width 
        res = Math.max(res, Math.min(height[l], height[r]) * (r - l))

        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return res
};
