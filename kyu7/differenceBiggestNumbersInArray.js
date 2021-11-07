const diffBig2 = arr => {
    let max = Math.max(...arr);
    
    arr.splice(arr.indexOf(max), 1);
    
    return max - Math.max(...arr);
  }