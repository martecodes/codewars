function findEvenIndex(arr) {
    let sum = 0,
        leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum)
    }

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (leftSum === sum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}