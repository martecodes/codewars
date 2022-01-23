const number = (array) => {
    return array.map((el, i) => `${i + 1}: ${el}`)
}

//example
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]