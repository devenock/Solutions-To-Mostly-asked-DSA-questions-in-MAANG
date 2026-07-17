// a prefix-sum is a technique for efficiently calculating the sum of subarrays in an integer array.
// Let's say we have an array: [1, 3, 4, 6, 7, 8, 5, 9] and we want to find the sum of this subarray between index 3 and 5(inclusive)
// We can note that the sum of that subarry 21 is the difference between the sum of two other subarrays: 29 - 8.
// The values 8 and 29 are examples of prefix sum, as they represent the sum of all the elements starting from the first element up to a certain index in the array.
// 8: arr[0] + arr[1] + arr[2]
// 29: arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5]
// This is the intituon behind the prefix-sum technique. If we have each prefix-sum of an array, we can use them to calculate the sum of any
// subarray in 0(1) time.

// Example of calculating the prefix sum of an array: time => 0(n), space => 0(n)
function prefixSum(arr) {
  let n = arr.length
  let prefix = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++){
    prefix[i] = prefix[i - 1] + arr[i - 1]
  }
  return prefix;
}

// now to get the sum of subarray, we just do: prefix[j - 1] - prefix[i]
