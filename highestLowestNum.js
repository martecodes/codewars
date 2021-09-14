function highAndLow(numbers){
    num = numbers.split(" ")
    return Math.max.apply(null,num) + " " + Math.min.apply(null,num)
  }