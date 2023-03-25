class Node {
  constructor(val) {
    this.val = val
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    let node = new Node(val)
    if (this.root === null) {
      this.root = node
      return this
    }

    let temp = this.root

    while (true) {
      if (node.val === temp.val) return undefined
      if (node.val < temp.val) {
        if (temp.left === null) {
          temp.left = node
          return this
        }
        temp = temp.left
      } else {
        if (temp.right === null) {
          temp.right = node
          return this
        }
        temp = temp.right
      }
    }
  }

  contains(val) {
    if (this.root === null) return false
    let temp = this.root
    while (temp) {
      if (val < temp.val) {
        temp = temp.left
      } else if (val > temp.val) {
        temp = temp.right
      } else {
        return true
      }
    }
    return false
  }
}

let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
/* 
BREADTH FIRST SEARCH
*/
// const BFS = root => {
//   let node = root,
//     queue = []
//   visited = []
//   queue.push(node)
//   while (queue.length) {
//     node = queue.shift()
//     visited.push(node.val)
//     if (node.left) queue.push(node.left)
//     if (node.right) queue.push(node.right)
//   }
//   return visited
// }

// BFS(tree.root)
/* 
DEPTH FIRST SEARCH PRE-ORDER
*/

// const dfsPreOrder = root => {
//   let visited = []
//   let current = root

//   function traverse(node) {
//     visited.push(node.val)
//     if (node.left) traverse(node.left)
//     if (node.right) traverse(node.right)
//   }
//   traverse(current)
//   return visited
// }

// console.log(dfsPreOrder(tree.root))
/* 
DEPTH FIRST SEARCH POST-ORDER
*/

const dfsPostOrder = root => {
  let current = root
  let visited = []
  function traverse(node) {
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
    visited.push(node.val)
  }
  traverse(current)
  console.log(visited)
  return visited
}

console.log(dfsPostOrder(tree.root))
