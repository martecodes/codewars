function nthChar(words) {
    return words.reduce((a, b, index) => a + b[index], "");
}