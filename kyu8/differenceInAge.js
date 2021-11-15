function differenceInAges(ages){
    let arr = []
    arr.push(Math.min(...ages))
    arr.push(Math.max(...ages))
    arr.push(arr[1] - arr[0])
    return arr
    
  }