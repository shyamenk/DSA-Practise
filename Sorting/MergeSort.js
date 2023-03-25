/* 
MERGE ARRAY HELPER FUNCTION
===========================
*/
/* 
PSUEDO CODE
=============
• Create an empty array, take a look at the smallest values
in each input array

• If the value in the first array is smaller than the value in
the second array, push the value in the first array into our
results and move on to the next value in the first array

• If the value in the first array is larger than the value in the
second array, push the value in the second array into our
results and move on to the next value in the second array

• Once we exhaust one array, push in all remaining values
from the other array
*/
/* 
CODE 
====
*/
// function merge(first, second) {
//   let result = []
//   let i = 0
//   let j = 0

//   while (i < first.length && j < second.length) {
//     if (first[i] < second[j]) {
//       result.push(first[i])
//       i++
//     } else {
//       result.push(second[j])
//       j++
//     }
//   }

//   while (i < first.length) {
//     result.push(first[i])
//     i++
//   }

//   while (j < second.length) {
//     result.push(second[j])
//     j++
//   }
//   return result
// }

/* 
MERGE SORT ALGORITHAM
======================

PSUEDO CODE
• Break up the array into halves until you have arrays that
are empty or have one element (use Slice, Recursion)   

• Once you have smaller sorted arrays, merge those arrays
with other sorted arrays until you are back at the full
length of the array

• Once the array has been merged back together, return the
merged (and sorted!) array
*/

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr
//   let mid = Math.floor(arr.length / 2)
//   let left = mergeSort(arr.slice(0, mid))
//   let right = mergeSort(arr.slice(mid))
//   return merge(left, right)
// }

// console.log(mergeSort([8, 1, 2, 3, 4, 5, 6, 2, 317]))
