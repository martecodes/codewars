  // return the two oldest/oldest ages within the array of ages passed in.
  function twoOldestAges(ages){
    let oldest = ages.sort((a,b) => a - b )
    return [oldest[oldest.length - 2], oldest[oldest.length - 1]]
    
  }
  