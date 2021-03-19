// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

let numIslands = function (grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }

  let numberOfIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        numberOfIslands += getIslandCount(grid, i, j);
      }
    }
  }

  return numberOfIslands;
};

let getIslandCount = function (grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return 0;
  }

  grid[i][j] = "0";

  getIslandCount(grid, i + 1, j);
  getIslandCount(grid, i - 1, j);
  getIslandCount(grid, i, j + 1);
  getIslandCount(grid, i, j - 1);

  return 1;
};
