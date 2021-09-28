function findNeedle(haystack) {
  let result = 'found the needle at position '
  
  for(let i = 0; i < haystack.length;i++){
    haystack[i] === 'needle' ? result += i :  null
  }
  
  return result
}