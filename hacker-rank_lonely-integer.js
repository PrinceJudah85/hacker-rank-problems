//Problem: Given an array of integers, where all elements but one occur twice, find the unique element. Function must return lonely integer.

function lonelyinteger(arr) {
  let frequency = {};
  let uniqueVal;

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }

  for (let key in frequency) {
    if (frequency[key] === 1) {
      return +key;
    }
  }
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
