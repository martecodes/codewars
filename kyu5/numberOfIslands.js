const numIslands = function (grid) {
    if (grid === null || grid.length === 0) {
        return 0
    }

    let numOfIsland = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numOfIsland += findIsland(grid, i, j)
            }
        }
    }

    return numOfIsland

};

let findIsland = function (grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
        return 0
    }

    grid[i][j] = '0'

    findIsland(grid, i + 1, j)
    findIsland(grid, i - 1, j)
    findIsland(grid, i, j + 1)
    findIsland(grid, i, j - 1)

    return 1
}