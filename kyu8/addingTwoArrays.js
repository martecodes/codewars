function arrayPlusArray(arr1, arr2) {
    return [].concat(arr1).concat(arr2).reduce((a,b) => {return a + b})
  }