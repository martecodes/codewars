function findShort(s){
  let short = s.split(' ')
  let shortWord = []
  
  for(let i = 0;i < short.length;i++){
    shortWord.push(short[i].length)
  }
  
  return Math.min.apply(null,shortWord)
}

//shorter way
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }