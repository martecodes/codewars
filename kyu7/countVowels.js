function getCount(str) {
    return str.match(/[a+e+i+o+u]/g) === null ? 0 : str.match(/[aeiou]/g).length
  }