function solution(A) {
    const mySet = new Set();

    for (const num of A) { // O(n)
        if (num > 0) {
            mySet.add(num);
        }
    }   

    for (let i = 1; i <= A.length + 1; i++) { // O(n)
        if (!mySet.has(i)) { 
            return i;
        }
    }
}