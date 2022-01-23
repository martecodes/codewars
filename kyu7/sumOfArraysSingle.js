function repeats(arr) {
    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a, c) => a + c)
};