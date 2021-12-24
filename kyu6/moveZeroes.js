const moveZeroes = function(nums) {
    let zeroIndex;
    for(let i = 0; i<nums.length;i++){
        //find first zero index
        if(zeroIndex===undefined && nums[i]===0){
            zeroIndex=i
        }
        //find numer after zero
        if(zeroIndex!==undefined && nums[i]!==0){
            //replace it 
            nums[zeroIndex]=nums[i];
            nums[i]=0;
            zeroIndex++
        }  
    }
    return nums;
};