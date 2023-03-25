/* 
LinkedList has a node and its value, Each node consists of pointer to the next Node 
Eg : Steps in a Stair case
eg: Array  like Elevators  
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = null
  }
  //Push Method Adding new node to the end of the linked List
  push(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }

  //Push Method Adding new node to the end of the linked List

  pop() {
    if (!this.head) return null
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) return null
    let current = this.head
    this.head = current.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  unShift(val) {
    let node = new Node(val)

    this.head = node
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }

  // Get Method Retreive a node by its Position
  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }

  set(index, val) {
    const nodeFound = this.get(index)
    if (nodeFound) {
      nodeFound.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unShift(val)
    let newNode = new Node(val)
    let prev = this.get(index - 1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  delete(index) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) return !!this.shift()
    if (index === this.length - 1) return this.pop()
    let prevNode = this.get(index - 1)
    let removed = prevNode.next
    prevNode.next = removed.next
    this.length--
    return removed
  }

  reverse() {
    let prev = null
    let current = this.head
    while (current !== null) {
      let nextNode = current.next
      current.next = prev
      prev = current
      current = nextNode
    }
    return (this.head = prev)
    // return this
  }
  log() {
    let current = this.head
    while (current !== null) {
      console.log(current.val)
      current = current.next
    }
  }
}
let linkedList = new LinkedList()
linkedList.push('1')
linkedList.push('2')
linkedList.push('3')
linkedList.push('4')
linkedList.push('5')
linkedList.push('6')

const reverse = linkedList.reverse()
console.log(linkedList.log())
