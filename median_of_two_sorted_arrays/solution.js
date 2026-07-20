// You are given two integer arrays nums1 and nums2 of size m and n respectively, where each is sorted in ascending order.
// Return the median value among all elements of the two arrays.

// Your solution must run in O(log(m+n))O(log(m+n)) time.

// Example 1:

// Input: nums1 = [1,2], nums2 = [3]

// Output: 2.0

// Explanation: Among [1, 2, 3] the median is 2.

// Example 2:

// Input: nums1 = [1,3], nums2 = [2,4]

// Output: 2.5

// Explanation: Among [1, 2, 3, 4] the median is (2 + 3) / 2 = 2.5.


// SOLUTION 1: brute force => time: 0((n + m)log(n + m)), space: 0(n + m)
function findMedianSortedArrays(nums1, nums2) {
  // merge the arrays and sort them
  let newArr = nums1.concat(nums2).sort((a, b) => a - b)

  // get the new merged array length
  let n = newArr.length;

  // check if the array length is even or odd and return the median
  if (n % 2 === 0) {
    // return the median of the sum of the middle item and the item before the middle one if n is even
    return (newArr[n / 2 - 1] + newArr[n / 2]) / 2.0
  } else {
    // if n is odd, just return the middle element
    return newArr[Math.floor(n / 2)]
  }
}
