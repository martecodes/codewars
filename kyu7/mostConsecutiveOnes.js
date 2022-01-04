const findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let tempCount = 0
    
    nums.forEach(num => 
                 {  if(num == 0) {tempCount = 0}
                    else{tempCount++}
                    if(tempCount > count) {count = tempCount}
                 })
    
    return count
};