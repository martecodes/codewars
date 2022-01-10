function duplicateCount(text){
    let result = {}
    let simpleText = text.toLowerCase()
    let num = 0
    
    for(letter in simpleText){
      if(result[simpleText[letter]] === undefined){
        result[simpleText[letter]] = 0
      }else{
        result[simpleText[letter]] = 1
      }
      
    }
    
    for(nums in result){
        num +=  result[nums]
    }
    
    console.log(simpleText)
    
    return num
  }