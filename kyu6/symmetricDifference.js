function sym(...args) {
  return [...args.reduce(reducer, new Set())]
}

function reducer(result, arr){
  const compare = new Set(arr);
  
  for(let val of compare){
    if(result.has(val)){
      result.delete(val);
    }else{
      result.add(val)
    }
  }
  return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);

/*
Code Explanation

Take advantage of the Set both to remove duplicates and to quickly do the equivalent of an includes check without having to iterate over everything. It’s a little more complicated, but computes in O(n) (linear) time. The difference here is that, rather than maintaining an Array of all the values that meet the criteria for symmetric difference, we do so with a Set, which we will later convert back to an Array.

First, we create a Set called compare from the items in our current array. This will create a data structure that holds the unique values from the array we’re comparing against our accumulator Set.

We can iterate over a Set using a for ...of loop, similar to an array. If our accumulator Set has the item, we delete it. If not, we add it.

We do this with each array in the array of arrays, adding and removing values from our accumulator Set until we’ve iterated through all of our arrays, and each of the values inside of them.

The reducer function will return out our accumulated Set. We then just use the spread operator to convert it back into an array.
*/