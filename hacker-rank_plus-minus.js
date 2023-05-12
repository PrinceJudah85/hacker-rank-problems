//Problem: Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
  let positiveNums = 0;
  let negativeNums = 0;
  let zeroNums = 0;
  let positiveRatio;
  let negativeRatio;
  let zeroRatio;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNums++;
    } else if (arr[i] < 0) {
      negativeNums++;
    } else if (arr[i] === 0) {
      zeroNums++;
    }
  }

  positiveRatio = positiveNums / arr.length.toFixed(6);
  negativeRatio = negativeNums / arr.length.toFixed(6);
  zeroRatio = zeroNums / arr.length.toFixed(6);

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}
