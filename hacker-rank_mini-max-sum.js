//Problem: Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  let minSum = sortedArray.slice(0, -1).reduce((arr, curr) => arr + curr, 0);
  let maxSum = sortedArray.slice(1).reduce((arr, curr) => arr + curr, 0);
  console.log("minSum", minSum, "maxSum", maxSum);
}

miniMaxSum([1, 3, 5, 7, 9]);
