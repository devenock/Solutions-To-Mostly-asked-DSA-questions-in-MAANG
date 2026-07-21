// Binary Search: Is a searching algorithm mostly applied on sorted data and uses divide and conquer to narrow down the search window.
// Instead of checking each element one by one, it compares the target to the middle element and eliminates half of the remaining elements with each comparison.
// They key requirement is that the assy must be sorted and results to a runtime of : 0(log n)


// EXAMPLE PROBLEM
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to
// search target in nums.If target exists, then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

function searchTarget(nums, target) {
  // define the left and right pointers
  let left = 0
  let right = nums.length - 1
  // set loop condition
  while (left <= right) {
    // get the mid element
    let mid = Math.floor((left + right) / 2)

    // return mid if it is the target
    if (nums[mid] === target) {
      return mid
    }

    // check the mid value and the target
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1;
}
