class Node {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(4)
let e = new Node(5)
// let f = new Node(4)
// let g = new Node(6)
// let h = new Node(7)
// let i = new Node(8)

a.next = b
b.next = c
c.next = d
d.next = e
// e.next = f
// f.next = g
// g.next = h

/* 
REVERSE LINKED LIST II
*/

const reverseListII = head => {
  let dummy = new node(head)
  let leftPrev = dummy
  let current = head

  for (let i = 0; i < left - 1; i++) {
    leftPrev = current
    current = current.next
  }
  let prev = null
  let next = current.next
  current.next = prev
  prev = current
  cur = next

  for (let i = 0; i < left - right + 1; i++) {
    leftPrev.next.next = cur
    leftprev.next = prev
  }
  return dummy.next
}

let reversedList = reverseListII(a)

console.log(reversedList)

/* 
REVERSE A LINKED LIST
*/

// var reverseList = function (head) {
//   var node = head
//   var previous = null

//   while (node) {
//     // save next or you lose it!!!
//     var next = node.next
//     // reverse pointer
//     node.next = previous
//     // increment previous to current node
//     previous = node
//     // increment node to next node or null at end of list
//     node = next
//   }
//   return (head = previous)
// }

// const res = reverseList(a)

// console.log(res)
/* 
FIND THE MID NODE
*/

// var middleNode = function (head) {
//   let fast = (slow = head)

//   while (fast && fast.next) {
//     fast = fast.next.next
//     slow = slow.next
//   }
//   return slow
// }

// let midNode = middleNode(a)

// console.log(midNode)
// const printLL = head => {
//   let current = head
//   let values = []

//   while (current !== null) {
//     values.push(current.val)
//     current = current.next
//   }
//   return values
// }

/* 
RECURSIVE
*/
// let values = []

// const printLL = head => {
//   if (head === null) return
//   values.push(head.val)
//   printLL(head.next)
//   return values
// }

/* 
Total Sum Traverse
*/
// const sum = head => {
//   let current = head
//   let sum = 0
//   while (current !== null) {
//     sum += current.val
//     current = current.next
//   }
//   return sum
// }

// const summed = sum(a)
// console.log(summed)

/* 
Total SUM Recursion
*/

// const sumList = head => {
//   if (head === null) return 0
//   return head.val + sumList(head.next)
// }

// const sum = sumList(a)
// console.log(sum)

/* 
LINKED LIST FIND
*/

// const linkedListFind = (head, target) => {
//   let current = head

//   while (current) {
//     if (current.val === target) return true
//     current = current.next
//   }
//   return false
// }

// const find = linkedListFind(a, 'G')

// console.log(find)

/* 
LINKED LIST FIND RECURSIVE APPROACH
*/
// const linkedListFind = (head, target) => {
//   if (head === null) return false
//   if (head.val === target) return true
//   return linkedListFind(head.next, target)
// }

// const findElement = linkedListFind(a, 'A')
// console.log(findElement)

/* 
 LeetCode
FIND DUPLICATE
*/
// 1 2 3 3 4 4 5
// P C N

// const deleteDuplicates = head => {
//   let dummy = new Node(-Infinity, head)
//   let prev = dummy
//   let current = head

//   while (current.next) {
//     if (current.next && current.val === current.next.val) {
//       while (current.next && current.val === current.next.val) {
//         current = current.next
//       }
//       prev.next = current.next
//     } else {
//       prev = prev.next
//     }
//     current = current.next
//   }
//   return dummy.next
// }
// const res = deleteDuplicates(a)
