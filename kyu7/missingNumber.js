const getMissingElement = (array) => {
  let number = []
  
  for(let i = 0;i <= array.length;i++){
    array.sort()
    i == array[i] ? null : number.push(i)  
  }
  
  return parseInt(number)
}

//shortert way using reduce
const getMissingElement = (array) => {
  return array.reduce((sum, value) => {return sum - value}, 45)
}