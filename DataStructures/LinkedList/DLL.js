// class Node {
//   constructor(val) {
//     this.val = val
//     this.next = null
//     this.prev = null
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }
//   push(val) {
//     let node = new Node(val)

//     if (!this.head) {
//       this.head = node
//       this.tail = node
//     } else {
//       this.tail.next = node
//       node.prev = this.tail
//       this.tail = node
//     }
//     this.length++
//     return this
//   }

//   pop() {
//     if (!this.head) return null

//     let temp = this.tail
//     if (this.length === 1) {
//       this.head = null
//       this.tail = null
//     } else {
//       this.tail = temp.prev
//       this.tail.next = null
//       temp.prev = null
//     }
//     this.length--
//     return temp
//   }

//   shift() {
//     if (!this.head) return null
//     let temp = this.head
//     if (this.length === 1) {
//       this.head = null
//       this.tail = null
//     } else {
//       this.head = temp.next
//       this.head.prev = null
//       temp.next = null
//     }
//     this.length--
//     return temp
//   }
// }

// let ddl = new DoublyLinkedList()

// ddl.push('a')
// ddl.push('b')
// ddl.push('c')
// ddl.push('d')
// ddl.push('e')
// ddl.shift()
// ddl.shift()
// ddl.shift()
// console.log(ddl)
