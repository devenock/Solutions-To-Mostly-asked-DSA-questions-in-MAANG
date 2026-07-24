// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

//     [3,4,5,6,1,2] if it was rotated 4 times.
//     [1,2,3,4,5,6] if it was rotated 6 times.

// Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

// You may assume all elements in the sorted rotated array nums are unique,

// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Example 1:

// Input: nums = [3,4,5,6,1,2], target = 1

// Output: 4

// Example 2:

// Input: nums = [3,5,6,0,1,2], target = 4

// Output: -1
//
// BRUTE FORCE SOLUTION: 0(n)
function searchInRotatedArray(nums, target) {
  if (nums.length === 0) {
    return -1
  }
  // loop through the array
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === target) {
      return i
    }
  }
  return -1
}

// SOLUTION 2: 0(nlog n)
function searchInRotatedArray(nums, target) {
  if (nums.length === 0) {
    return -1
  }

  let sortedArr = [...nums].sort((a, b) => a - b)
  let left = 0
  let right = sortedArr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (sortedArr[mid] === target) {
      let midIndex = nums.indexOf(sortedArr[mid])
      return midIndex;
    } else if (sortedArr[mid] > target) {
      right = mid -1
    } else {
      left = mid + 1
    }
  }
  return -1
}

// OPTMIZIDED SOLUTION: Binary Search 0(log n)
// Here we have to check which side of the rotated sorted array is already sorted.
// Then we ask, is the target within that sorted window range?
// A rotated array always have just a single break-point because there is always one side that is sorted and when you cut the
// window at mid, there will be one side that is already sorted.
function search(nums, target) {
  // check nums length
  if (nums.length === 0) {
    return -1;
  }

  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid;
    }
    // detect the sorted half
    if (nums[left] <= nums[mid]) {
      // left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1;
}
