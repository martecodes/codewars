function partsSums(ls) {
    ls.unshift(0);
   console.log('=====')
   console.log(ls)
     let sum = ls.reduce((p, c) => p + c, 0);
     console.log(sum)
     return ls.map(v => sum = sum - v);
 }