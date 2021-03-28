// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:

// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]

var generateMatrix = function (n) {
  let grid = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let row = 0;
  let endRow = n - 1;

  let col = 0;
  let endCol = n - 1;

  let val = 1;

  while (row <= endRow && col <= endCol) {
    for (let i = col; i <= endCol; i++) {
      grid[row][i] = val;
      val++;
    }

    row++;

    for (let i = row; i <= endRow; i++) {
      grid[i][endCol] = val;
      val++;
    }

    endCol--;

    if (endRow >= row) {
      for (let i = endCol; i >= col; i--) {
        grid[endRow][i] = val;
        val++;
      }

      endRow--;
    }

    if (endCol >= col) {
      for (let i = endRow; i >= row; i--) {
        grid[i][col] = val;
        val++;
      }
    }

    col++;
  }
  return grid;
};
