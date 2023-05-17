function maximizeUpperLeft(matrix) {
  const n = matrix.length / 2; // assuming matrix is 2n x 2n
  let maxSum = 0;
  let rowArrangement = [];
  let colArrangement = [];

  // try all possible row and column arrangements
  for (let i = 0; i < 2 * n; i++) {
    for (let j = i + 1; j < 2 * n; j++) {
      // reverse the rows
      let temp = matrix[i]; // => [112, 42, 83, 119]
      matrix[i] = matrix[j]; // => [42, 125, 78, 98]
      matrix[j] = temp;

      // calculate the sum of the upper-left quadrant
      let sum = 0;
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
          sum += matrix[r][c];
        }
      }

      // record the arrangement if it gives us a higher sum
      if (sum > maxSum) {
        maxSum = sum;
        rowArrangement = [i, j];
        colArrangement = [i, j];
      }

      // reverse the rows back to the original arrangement
      temp = matrix[i];
      matrix[i] = matrix[j];
      matrix[j] = temp;

      // reverse the columns
      for (let r = 0; r < 2 * n; r++) {
        temp = matrix[r][i];
        matrix[r][i] = matrix[r][j];
        matrix[r][j] = temp;
      }

      // calculate the sum of the upper-left quadrant
      sum = 0;
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
          sum += matrix[r][c];
        }
      }

      // record the arrangement if it gives us a higher sum
      if (sum > maxSum) {
        maxSum = sum;
        rowArrangement = [i, i];
        colArrangement = [i, j];
      }

      // reverse the columns back to the original arrangement
      for (let r = 0; r < 2 * n; r++) {
        temp = matrix[r][i];
        matrix[r][i] = matrix[r][j];
        matrix[r][j] = temp;
      }
    }
  }
};

  maximizeUpperLeft([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
  ]);