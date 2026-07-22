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
    }else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1;
}

// PROBLEM 2:
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// BRUTE FORCE SOLUTION: 0(n)
function firstAndLastPosition(nums, target) {
  // // declare first and last positions
  // let first = -1, last = -1
  // // loop through the array
  // for (let i = 0; i < nums.length; i++){
  //   if (nums[i] === target) {
  //     if (first == -1) first = i
  //       last = i
  //   }
  // }
  // return [first, last]

  // check array length
  if (nums.length === 0) {
    return [-1, -1]
  }

  // declare the output array
  let outputArr = []
  // loop through the array
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === target) {
      outputArr.push(i)
    }
  }
  // check if we didn't find anything and return [-1, -1]
  if (outputArr.length === 0) {
    return [-1, -1]
  }
  // else return the first and last items in the outputArr
  return [outputArr[0], outputArr[outputArr.length - 1]]
}

// OPTIMIZED SOLUTION: 0(log n)
function firstAndLastPosition(nums, target) {
  // check array length
  if (nums.length === 0) {
    return [-1, -1]
  }
  const firstBound = (isFirst) => {
    // declare the points
    let left = 0
    let right = nums.length - 1
    let result = -1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        result = mid
        if (isFirst) {
          right = mid -1
        } else {
          left = mid + 1
        }
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return result;
  }

  return [firstBound(true), firstBound(false)]
}
