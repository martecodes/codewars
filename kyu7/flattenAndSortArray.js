function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => {return a - b})
  }