//Problem:
// Alternative Sorting
// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

// Challenge
// Given a list of integers, count and return the number of times each value appears as an array of integers.

// Function Description
// Complete the countingSort function in the editor below.
// countingSort has the following parameter(s): arr[n]: an array of integers

function countingSort(arr) {
	const freqArr = Array(100).fill(0);
  let sortedArr = [];
	
  for (let i = 0; i < arr.length; i++) {
  	let index = arr[i] - 1;
   	freqArr[index]++;
  }
  
  for (let i = 0; i < freqArr.length; i++) {
    while (freqArr[i] > 0) {
    	sortedArr.push(i+1);
      freqArr[i]--;
    }
  }
  
  return sortedArr;
};

countingSort([3,6,20,6,4,7,8,4,2,1,1,9,20,20,20,28]);