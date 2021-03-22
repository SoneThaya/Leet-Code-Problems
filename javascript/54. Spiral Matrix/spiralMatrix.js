// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let currentDirectionIndex = 0;

  const turnRight = () => {
    currentDirectionIndex = (currentDirectionIndex + 1) % directions.length;
  };

  const result = [];

  let i = 0;
  let j = 0;

  const total = matrix.length * matrix[0].length;

  while (result.length < total) {
    result.push(matrix[i][j]);
    matrix[i][j] = null;

    const nextPossible = [
      i + directions[currentDirectionIndex][0],
      j + directions[currentDirectionIndex][1],
    ];

    if (
      nextPossible[0] < 0 ||
      nextPossible[0] >= matrix.length ||
      nextPossible[1] < 0 ||
      nextPossible[1] >= matrix[0].length ||
      matrix[nextPossible[0]][nextPossible[1]] === null
    ) {
      turnRight();
    }

    i += directions[currentDirectionIndex][0];
    j += directions[currentDirectionIndex][1];
  }

  return result;
};
