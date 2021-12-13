// Input: nums = [1,2,3,1]
// Output: true

const containsDuplicate = (nums) => {
    //create a memory
    //Go through array and see if what i see now, is something I've seen before.
        //if the num is never seen before. Add it to memory.
        //if the num does exist in memory. return true
    //[1,2,3,1]
    let memory = {}
    
    for(let i = 0;i < nums.length;i++){
        if(memory[nums[i]] === undefined){
            memory[nums[i]] = nums[i]
        }else{
            return true
        }
    }
    
    return false
};