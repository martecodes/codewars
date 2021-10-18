function solution(nums){
    const order = (a,b) =>{
      return a - b
    }
    return nums === null ? [] : nums.sort(order)
  }