function oddOrEven(array) {
    return array.length === 0 ? 'even' : array.reduce((e,i) => e + i) % 2 == 0 ? 'even' : 'odd'
   }