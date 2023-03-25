/* 
SELECTION SORT
*/
/* 
PSUEUDO CODE

1. Store the first element as the smallest value you've seen so far.
Compare this item to the next item in the array until you find a
smaller number.

2. If a smaller number is found, designate that smaller number to
be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began
with, swap the two values.

3. Repeat this with the next element until the array is sorted.
*/
function selectionSort(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    let low = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[low]) {
        low = j
      }
    }
    // let temp = arr[i]
    // arr[i] = arr[low]
    // arr[low] = temp
    ;[arr[i], arr[low]] = [arr[low], arr[i]]
  }
  return arr
}

console.log(selectionSort([5, 3, 4, 1, 2]))
