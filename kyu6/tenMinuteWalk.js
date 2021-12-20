function isValidWalk(walk) {

    if (walk.length == 10) {
        let startPoint = {}

        for (let direction of walk) {
            if (startPoint[direction] == undefined) {
                startPoint[direction] = 1
            } else {
                startPoint[direction] += 1
            }
        }

        if (startPoint['n'] == startPoint['s'] && startPoint['w'] == startPoint['e']) {
            return true
        }
    }

    return false
}

//   array(walk) can't be shorter or longer than 10 else its false
//  ['n','s','n','s','n','s','n','s','n','s'] => true
  //exactly 10 letters = 10 mins.
  
//  ['w','e','w','e','w','e','w','e','w','e','w','e'] => false
  //false because there's more than 10 letters. 1 letter 1 minute
  