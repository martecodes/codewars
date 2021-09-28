function getAverage(marks){
  let totalSum = 0; 
  
  for(let i in marks) {
    totalSum += marks[i];
  }
  
  return Math.floor(totalSum / marks.length)
}