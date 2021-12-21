function duplicateEncode(word) {
    let simple = word.toLowerCase()
    let memory = {}

    for (let letter of simple) {
        if (memory[letter] == undefined) {
            memory[letter] = 1
        } else {
            memory[letter] += 1
        }
    }

    return simple.split("").map(letter => memory[letter] > 1 ? ')' : '(').join("")
}
// hello => "(())("
  //save in memory to keep track of letters thats duplicate