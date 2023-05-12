//Problem: Given an array, find and return the median value.

function calculateMedian(arr) {
  let median;
  const sortedArr = arr.sort((a, b) => a - b);
  console.log("sortedArr", sortedArr);

  for (let i in sortedArr) {
    if (sortedArr.length % 2 !== 0) {
      median = sortedArr[Math.floor(sortedArr.length / 2)];
    } else if (sortedArr.length % 2 === 0) {
      median =
        (sortedArr[Math.floor(sortedArr.length / 2)] +
          sortedArr[sortedArr.length / 2 - 1]) /
        2;
    }
  }
  console.log("median", median);
  return median;
}

calculateMedian([8, 11, 20, 28, 1, 5, 9, 25]);
