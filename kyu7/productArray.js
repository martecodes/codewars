function productArray(numbers){
    return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
  }