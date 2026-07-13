// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// SOLUTIONS


// 1. BRUTE FORCE: 0(n^2)
function twoSum(nums, target) {
  // check array length
  if (nums.length === 0) {
    return [-1, -1]
  }
  // loop through the array
  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      let sum = nums[i] + nums[j]
      if (sum == target) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}

// 2. OPTIMIZED SOLUTION: sorting and two pointers
function twoSumSol2(nums, target) {
  if (nums.length == 0) {
    return [-1, -1]
  }

  // copy the array to a new one
  let newNums = [...nums]

  // sort the new array
  newNums.sort((a, b) => a - b)

  // declare the pointers
  let leftPointer = 0
  let rightPointer = nums.length - 1
  // set loop condition
  while (leftPointer < rightPointer) {
    let sum = newNums[leftPointer] + newNums[rightPointer]
    if (sum == target) {
      let leftIndex = nums.indexOf(newNums[leftPointer])
      let rightIndex = nums.lastIndexOf(newNums[rightPointer])
      return [leftIndex, rightIndex]
    } else if (sum > target) {
      rightPointer--
    } else {
      leftPointer++
    }
  }

  return [-1, -1]
}


// 3.OPTIMIZED SOLUTION: Hash Table => 0(n)
