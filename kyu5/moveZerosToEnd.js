const moveZeros = (arr) => {  
  let array = [];
  let arrayOfZeros = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arrayOfZeros.push(arr[i]);
    } else {
      array.push(arr[i]);
    }
  }
  return [...array, ...arrayOfZeros];
}