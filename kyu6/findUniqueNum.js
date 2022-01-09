function findUniq(arr) {
    return Number(arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).join(""))
   }