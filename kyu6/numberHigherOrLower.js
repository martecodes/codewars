function guessNumber(n) {

    // create left, right pointer
    let start = 1
    let end = n

    // while start is before or equal to end
    while (start <= end) {

        // create mid pointer
        let mid = Math.floor((start + end) / 2)

        // create picked number variable
        let pick = guess(mid)
        // console.log("START", start, mid, end, pick)

        // If the pick equals guess, return mid which is the pick
        if (pick === 0) {
            // console.log("OUTPUT", start, mid, end, pick)
            return mid

            // if picked in middle is smaller than guess, move end back 1
        } else if (pick === -1) {
            end = mid - 1
            // console.log("OUTPUT END", start, mid, end, pick)

            // else, the pick in middle is larger than guess, move start up 1
        } else {
            start = mid + 1
            // console.log("OUTPUT START", start, mid, end, pick)
        }
    }
}