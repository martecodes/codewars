function squareSum(numbers){
  let total = 0
  numbers.forEach(e => total += (e * e))
  return total
}