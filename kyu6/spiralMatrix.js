const spiralOrder = function (matrix) {

    let x = 0
    let y = 0
    let direction = "right"

    let res = []
    let visited = []

    for (let i = 0; i < (matrix.length * matrix[0].length); i++) {

        res.push(matrix[y][x])
        visited.push([y, x])

        if (direction === "right") {
            if (x < matrix[0].length - 1 && beenThere(visited, x + 1, y) === false) {
                x++
            } else {
                y++
                direction = "down"
            }
        } else if (direction === "down") {
            if (y < matrix.length - 1 && beenThere(visited, x, y + 1) === false) {
                y++
            } else {
                x--
                direction = "left"
            }
        } else if (direction === "left") {
            console.log(visited, y, x - 1)
            if (x > 0 && beenThere(visited, x - 1, y) === false) {
                x--
            } else {
                y--
                direction = "up"
            }
        } else {
            if (y > 0 && beenThere(visited, x, y - 1) === false) {
                y--
            } else {
                x++
                direction = "right"
            }

        }

    }

    function beenThere(visited, x, y) {

        if (visited.find(v => v[0] === y && v[1] === x)) {

            return true
        } else {
            return false

        }
    }

    return res

};

/*
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]


[01,02,03,04,05]
[06,07,08,09,10]
[11,12,13,14,15]
[16,17,18,19,20]
[21,22,23,24,25]


*/