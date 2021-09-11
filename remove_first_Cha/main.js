function removeChar(str){
  newStr = str.split('')
  delete newStr[0]
  delete newStr[newStr.length -1]
  newnew = newStr.join('')
  return newnew
};