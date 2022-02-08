function solution(A) {
    const mySet = new Set();

    for (const num of A) {
        if (num > 0) {
            mySet.add(num);
        }
    }   
    for (let i = 1; i <= A.length + 1; i++) {
        if (!mySet.has(i)) {
            return i;
        }
    }
}