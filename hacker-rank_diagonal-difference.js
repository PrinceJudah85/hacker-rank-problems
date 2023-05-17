//Problem: Given a square matrix, calculate the absolute difference between the sums of its diagonals.

//Input Format: The first line contains a single integer, 'n', the number of rows and columns in the square matrix arr.
//Each of the next 'n' lines describes a row, arr[i],and consists of 'n' space-separated integers arr[i][j]

function diagonalDifference(arr) {
  let leftToRightDiag = 0;
  let rightToLeftDiag = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    leftToRightDiag += arr[i][i];
    rightToLeftDiag += arr[i][n - i - 1];
  }

  return Math.abs(leftToRightDiag - rightToLeftDiag);
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
