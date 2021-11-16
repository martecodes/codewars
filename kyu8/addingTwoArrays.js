function arrayPlusArray(arr1, arr2) {
  return [].concat(arr1, arr2).reduce((a, c) => a + c)
}
