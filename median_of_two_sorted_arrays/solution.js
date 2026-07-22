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

// OPTIMAL BINARY SEARCH SOLUTION => time: 0(log(min(n,m))), space: 0(1)
function findMedianSortedArrays(nums1, nums2) {
  // reassign the sorted arrays to A and B respectively
  let A = nums1
  let B = nums2

  // get the total length of the new arrays
  let total = A.length + B.length
  // get the mid point
  let half = Math.floor((total + 1) / 2)

  // ensure A is the smallest or swap
  if (B.length < A.length) {
    [A, B] = [B, A]
  }

  // declare the pointers to perform a binary search on A
  let left = 0
  let right = A.length
  while (left <= right) {
    // get the mid
    let mid = Math.floor((left + right) / 2)
    // declare j as the cut(where array B starts)
    let j = half - mid
    // define border values around the cut
    let ALeft = mid > 0 ? A[mid - 1] : Number.MIN_SAFE_INTEGER;
    let ARight = mid < A.length ? A[mid] : Number.MAX_SAFE_INTEGER;
    let BLeft = j > 0 ? B[j - 1] : Number.MIN_SAFE_INTEGER;
    let BRight = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER;

    if (ALeft <= BRight && BLeft <= ARight) {
      if (total % 2 !== 0) {
        return Math.max(ALeft, BLeft)
      }
      return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2
    } else if (ALeft > BRight) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
