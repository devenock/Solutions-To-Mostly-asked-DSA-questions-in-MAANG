// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// BRUTE FORCE SOLUTION: 0(n^2)
function productExceptSelf(nums) {
  // check to ensure array is not empty
  if (nums.length == 0) {
    return []
  }
  // declare the output array
  let outputArr = []
  // loop through the array
  for (let i = 0; i < nums.length; i++){
    // declare the product as 1
    let product = 1
    // loop through the nums array again
    for (let j = 0; j < nums.length; j++){
      if (i != j) {
        product *= nums[j]
      }
    }
    outputArr.push(product)
  }
  return outputArr;
}

// OPTIMIZED SOLUTION: Prefix and Suffix Sum => time:0(n), space: 0(n)
// pseudocode

// Let n be the length of the array.
//1.  Create three arrays of size n:

//     pref for prefix products
//     suff for suffix products
//     res for the final result

//2.  Set:

//     pref[0] = 1 (nothing to the left of index 0)
//     suff[n - 1] = 1 (nothing to the right of last index)

//3.  Build the prefix product array:

//     For each i from 1 to n - 1:
//         pref[i] = nums[i - 1] × pref[i - 1]

//4.  Build the suffix product array:

//     For each i from n - 2 down to 0:
//         suff[i] = nums[i + 1] × suff[i + 1]

//5.  Build the result:

//     For each index i, compute:
//         res[i] = pref[i] × suff[i]

//6.  Return the result array.

function productExceptSelf(nums) {
  let n = nums.length
  let result = new Array(n)
  let suff = new Array(n)
  let pref = new Array(n)

  pref[0] = 1
  suff[n - 1] = 1

  for (let i = 1; i < n; i++){
    pref[i] = nums[i -1] * pref[i - 1]
  }

  for (let i = n- 2; i > 0; i--){
    suff[i] = nums[i + 1] * suff[i + 1]
  }

  for (let i = 1; i < n; i++){
    result[i] = pref[i] * suff[i]
  }
  return result;
}

// OPTIMIZED SOLUTION=> time: 0(n), space: 0(1)

// Algorithm

//     Initialize the result array res with all values set to 1.
//     Create a variable prefix = 1.
//     First pass (left to right):
//         For each index i:
//             Set res[i] = prefix (product of all elements to the left).
//             Update prefix *= nums[i].
//     Create a variable postfix = 1.
//     Second pass (right to left):
//         For each index i:
//             Multiply res[i] by postfix (product of all elements to the right).
//             Update postfix *= nums[i].
//     Return the result array res.

function productExceptSelf(nums) {
  // get array length
  let n = nums.length
  // create a new array of size n and fill it with 1s
  let res = new Array(n).fill(1)

  // loop through the array till end to get the prefix
  for (let i = 1; i < n; i++){
    // update the res array with the new values
    res[i] = res[i - 1] * nums[i - 1]
  }
  // declare the postfix
  let postfix = 1
  // loop through the array starting from the last item
  for (let i = n - 1; i >= 0; i--){
    // multiply each item of the res array with the postfix value
    res[i] *= postfix
    // update the postfix
    postfix *= nums[i]
  }
// return that res array
  return res
}
