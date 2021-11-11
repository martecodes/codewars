function spinWords(string) {
    return (string.split(' '))
        .map((el) => { return el.length >= 5 ? el.split('').reverse().join('') : el })
        .join(' ')
}

/*
  P - Parms is passing a tring
  R - Return words with five or more letters reversed
  E - Example: 'Bye and Hello' return 'bye and olleH'
  P - Need a loop that checks if the word has more than 5 letters.
        might have to split the string to make it an array...
        if a word has more than five letters I need to reverse it.
        join the array with new words reversed.
*/