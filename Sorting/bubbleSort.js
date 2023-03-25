/* 
PSUEUDO CODE
============
1. Start looping from with a variable called i the end of
the array towards the beginning
2. Start an inner loop with a variable called j from the
beginning until i- 1
3. If arr[j] is greater than arr[j+l], swap those two
values!
4. Return the sorted array
*/

/* 
BUBBLE SORT CODE
================
*/
function bubbleSort(arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
console.log(bubbleSort([3, 6, 1, 2, 8]))
