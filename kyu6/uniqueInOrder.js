function uniqueInOrder(it) {
    const result = []
    const last
    
    for (const i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }