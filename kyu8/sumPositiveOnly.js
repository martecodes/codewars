function positiveSum(arr) {
  let total = 0
  
  for(let i = 0; i < arr.length;i++){
    arr[i] > 0 ? total += arr[i] : null
  }
  
  return total
}