const BinarySearchTree = require('./BinarySearchTree.js')

function main() {

  const numTree = new BinarySearchTree()
  const easyTree = new BinarySearchTree()

  
  numTree.insert(3,3)
  numTree.insert(1,1)
  numTree.insert(4,4)
  numTree.insert(6,6)
  numTree.insert(9,9)
  numTree.insert(2,2)
  numTree.insert(5,5)
  numTree.insert(7,7)

  easyTree.insert('E')
  easyTree.insert('A')
  easyTree.insert('S')
  easyTree.insert('Y')
  easyTree.insert('Q')
  easyTree.insert('U')
  // easyTree.insert('E')
  // easyTree.insert('S')
  easyTree.insert('T')
  easyTree.insert('I')
  easyTree.insert('O')
  easyTree.insert('N')

  let arr = [2, 4, 5, 7, 3, 1]
  // console.log(tree(numTree))
  // display(easyTree)
  // console.log(numTree, easyTree)
  // console.log(height(numTree))
  console.log(isBST(arr))
}

//depth first search
function display(tree) {
  
  if (tree.left) {
    display(tree.left)
  }
  console.log(tree.key)

  if (tree.right) {
    display(tree.right)
  }
}

function tree(t){
  if(!t){
      return 0;
  }

  return tree(t.left) + t.value + tree(t.right)
}

//time complexity: O(n)
function height(tree) {
  if(!tree) return 0;
  let count;
  count++

  let leftHeight = height(tree.left);
  let rightHeight = height(tree.right);
  console.log(count)

  return Math.max(leftHeight, rightHeight) + 1
}

function isBST(node) {
  let isRight;
  let isLeft;
  if (!node) {
    return true;
  }

  // first see if left node is less than current node value
  if (node.left) {
    if (node.left.key < node.key) {
    isLeft = isBST(node.left)
    }
    else return false;
  }

  // then, check if right node greater than current node
  if (node.right) {
    if (node.right.key > node.key) {
    isRight = isBST(node.right)
    }
    else return false;
  }

  //if right node is less than current, or if left node is greater than current
  if ((!isLeft && (node.left !== null)) || ((node.right !== null) && !isRight)) {
    return false
  }
  else return true

}

function findNth(tree, n) {
//search the right half
//push values to an array recursively
// find 



}

main()