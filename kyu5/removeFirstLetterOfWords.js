function pigIt(str) {
    return (str.split(' ')).map((word) => { return word.match(/[A-z]/i)? `${word.substr(1)}${word.substr(0, 1)}ay` : word }).join(' ')
}