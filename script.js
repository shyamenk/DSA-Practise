/* 
BRUTE FORCE APPROACH / NAIVE
*/

// function sum(arr1, arr2) {
//   EDGE CASE First Step to check Whether The both array are equal in length

//   if (arr1.length != arr2.length) {
//     return false
//   }
//   for (i = 0; i < arr1.length; i++) {
//     // Check the element is present in the second array otherwise it return -1
//     let currentIndex = arr2.indexOf(arr1[i] ** 2)
//     if (currentIndex === -1) {
//       return false
//     }
//     arr2.splice(currentIndex, 1)
//   }
//   return true
// }

// const array1 = [1, 2, 3]
// const array2 = [1, 9, 4]
// console.log(sum(array1, array2))

/*
OPTIMAL SOLUTION USING FREQUENCY COUNTER PATTERN
*/

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   let frequencyCounter1 = {}
//   let frequencyCounter2 = {}
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false
//     }
//   }
//   return true
// }

// console.log(same([1, 2, 3], [9, 1, 4]))

/*
Given two strings, write a function to determine if the
second string is an anagram of the first. An anagram is
a word, phrase, or name formed by rearranging the
letters of another, such as cinema, formed from iceman.

input =  "anagram" "nagaram"
output = 
*/

// const checkAnagram = (first, second) => {
//   if (first.length !== second.length) {
//     return false
//   }
//   const lookuUp = {}

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i]
//     lookuUp[letter] ? (lookuUp[letter] += 1) : (lookuUp[letter] = 1)
//   }
//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i]
//     if (!lookuUp[letter]) {
//       return false
//     } else {
//       lookuUp[letter] -= 1
//     }
//   }
//   return true
// }

// console.log(checkAnagram('anagram', 'nagarma')) // "nagaram"

/* 
ANOTHER SOLUTION
*/

// const checkAnagram = (first, second) => {
//   if (first.length !== second.length) {
//     return false
//   }
//   const words1 = first.split('').sort().join()
//   const words2 = second.split('').sort().join()
//   if (words1 !== words2) {
//     return false
//   }
//   return true
// }

// console.log(checkAnagram('anagram', 'nagarma')) // "nagaram"

/* 
MULTIPLE POINTER PATTERN
*/

/* 
Write a function called sumZero which accepts a sorted
array of integers. The function should find the first pair
where the sum is O. Return an array that includes both
values that sum to zero or undefined if a pair does not exist
*/
/* 
NAIVE SOLUTION
Time complexity O(n^2)
Space complexity O(1)
*/

// function sumZero(arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }
// console.log(sumZero([-1, -2, -1, 0, 1, 2, 1])) // [-3 , 3]
/* 
Multiple Pointer Pattern 
Time complexity O(n)
Space complexity O(1)
*/
// function sumZero(arr) {
//   let left = 0
//   let right = arr.length - 1
//   while (left < right) {
//     let sum = arr[left] + arr[right]
//     if (sum === 0) {
//       return [arr[left], arr[right]]
//     } else if (sum > 0) {
//       right--
//     } else {
//       left++
//     }
//   }
// }
// console.log(sumZero([-12, -8, -4, 0, 1, 2, 3, 12])) // [-3 , 3]
/* 
Implement a function called countUniqueVaIues,
which accepts a sorted array, and counts the
unique values in the array. There can be negative
numbers in the array, but it will always be sorted.
*/

/* 
My Solution - Naive
*/
// function countUniqueValues(arr) {
//   let count = []
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       count.push(arr[i])
//     }
//   }
//   return count.length
// }

// console.log(countUniqueVaIues([-2, -1, -1, 0, 1]))

/* 
TWO POINTER
*/

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0
//   let i = 0
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++
//       arr[i] = arr[j]
//     }
//     console.log(i, j)
//   }
//   return i + 1
// }
// console.log(countUniqueValues([]))

/* 
MAX SUB ARRAY SUM Leetcode
*/
// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null
//   }
//   var max = -Infinity
//   console.log(max)
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j]
//     }
//     if (temp > max) {
//       max = temp

//     }
//   }
//   return max
// }

// maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// function maxSubarraySum(arr, num) {
//   let maxSum = 0
//   let temMax = 0
//   if (arr.length < num) return null
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i]
//   }
//   temMax = maxSum
//   for (let i = num; i < arr.length; i++) {
//     temMax = temMax - arr[i - num] + arr[i]
//     maxSum = Math.max(maxSum, temMax)
//   }
//   return maxSum
// }
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))

/* 
MAX SUB ARRAY SUM
*/

// const maxSubArraySum = (arr, num) => {
//   temp = 0
//   max = 0
//   for (let i = 0; i < num; i++) {
//     max += arr[i]
//   }
//   temp = max
//   for (let i = num; i < arr.length - 1; i++) {
//     temp = temp - arr[i - num] + arr[i]
//     max = Math.max(temp, max)
//   }
//   return max
// }

// console.log(maxSubArraySum([1, 4, 7, 4, 5, 3, 9, 11, 1, 2], 4))

/* 
PATTERNS
*/

/* 
LEFT TRIANGLE
*/

// function leftTraingle(n) {
//   let string = ''
//   for (let row = 1; row <= n; row++) {
//     for (let col = 1; col <= row; col++) {
//       string += '*'
//     }
//     string += '\n'
//   }
//   console.log(string)
// }

// leftTraingle(4)

/* 
SQUARE STAR PATTERN
*/
// function squareStarPattern(n) {
//   let string = ''
//   for (let row = 1; row <= n; row++) {
//     for (let col = 1; col <= n; col++) {
//       string += '*'
//     }
//     string += '\n'
//   }
//   console.log(string)
// }

// squareStarPattern(4)

/* 
RIGHT TRIANGLE PATTERN
*/

// function rightTrianglePattern(n) {
//   let string = ''
//   for (let row = 1; row <= n; row++) {
//     for (let col = 1; col <= n - row + 1; col++) {
//       string += '*'
//     }
//     string += '\n'
//   }
//   console.log(string)
// }

// rightTrianglePattern(5)

/* 
SEARCH
*/

// const search = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i
//     }
//   }
//   return -1
// }

// console.log(search([1, 2, 3, 4, 5], 4))

/* REFACTOR */

// function search(arr, val) {
//   let min = 0
//   let max = arr.length - 1
//   let result = n
//   while (min <= max) {
//     let middle = Math.floor((min + max) / 2)
//     if (arr[middle] < val) {
//       min = middle + 1
//     } else if (arr[middle] > val) {
//       result =  mid
//       max = middle - 1
//     } else {
//       return middle
//     }
//   }
//   return -1
// }

// console.log(search([1, 2, 3, 4, 5], 5))

/* 
CEILING OF A NUMBER
*/

// function ceilingOfANumber(arr, target) {
//   let left = 0
//   let right = arr.length - 1
//   let ceil = -1

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2) // left
//     console.log(left, right)
//     if (arr[mid] === target) {
//       return arr[mid]
//     } else if (target <= arr[mid]) {
//       ceil = arr[mid]
//       right = mid - 1
//     } else {
//       left = mid + 1
//     }
//   }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= target) {
//     return arr[i]
//   }
// }
//   return ceil
// }

// console.log(ceilingOfANumber([-12, -3, 5, 9, 14, 16, 18], 15))

/* 
RECURSION
*/

// const factorial = n => {
//   if (n <= 0) {
//     return 1
//   } else {
//     return n * factorial(n - 1)
//   }
// }

// console.log(factorial(5))
/* 
BINARY SEARCH
=============
*/

// const binarySearch = (arr, num) => {
//   let left = 0
//   let right = arr.length - 1
//   let mid = Math.floor((left + right) / 2)
//   while (arr[mid] !== num && left <= right) {
//     if (arr[mid] < num) left = mid + 1
//     else right = mid - 1
//     mid = Math.floor((left + right) / 2)
//   }
//   return arr[mid] == num ? mid : -1
// }
// console.log(binarySearch([1, 4, 4, 6, 3, 6], 1))

/* 
FIND SQUARE ROOT
*/

// function sqrRoot(num) {
//   let left = 0
//   let right = num
//   let mid = left + (right - left) / 2
//   let t = mid / 2
//   if (t * t === num) {
//     return t
//   }

//   return false
// }
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
