function longest(s1, s2) {
    // no dubplicates  -> Set -> turn into an array -> sort -> join
    return [...new Set(s1 + s2)].sort().join("")
}