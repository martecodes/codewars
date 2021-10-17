function reverseWords(str) {
    let newWords = []
    let split = str.split(" ")
    
    for(let i = 0; i < split.length;i++){
      newWords.push(split[i].split('').reverse().join(''))
    }
    
    return newWords.join(' ')
  }

  //shorter way
  function reverseWords(str) {
    return str.split(' ').map((word) =>{
      return word.split('').reverse().join('');
    }).join(' ');
  }