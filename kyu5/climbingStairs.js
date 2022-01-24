const climbStairs = function (n) {

    let count = (stairsRemaining, savedResults) => {
        if (stairsRemaining < 0) {
            return 0
        }
        if (stairsRemaining === 0) {
            return 1
        }
        if (savedResults[stairsRemaining]) {
            return savedResults[stairsRemaining]
        }

        savedResults[stairsRemaining] =
            count(stairsRemaining - 1, savedResults) +
            count(stairsRemaining - 2, savedResults)

        return savedResults[stairsRemaining]
    }

    return count(n, {})
};