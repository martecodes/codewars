const duplicateZeros = function(arr) {
    
    let n = arr.length;
    for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      arr.pop();
      i++;
      arr.splice(i,0,0)
    }
        console.log(arr)
  }
    
};
