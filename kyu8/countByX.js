function countBy(x, n) {
  let z = [];
  for(i = x; i <= x*n; i += x){
    z.push(i)
  }
  return z;
}