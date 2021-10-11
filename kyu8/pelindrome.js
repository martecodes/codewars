function isPalindrome(x) {
    let xMan = x.toLowerCase()
    let xWoman = xMan.split('').reverse().join('')
    return xMan == xWoman
  }
  