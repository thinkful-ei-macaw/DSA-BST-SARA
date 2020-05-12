const BinarySearchTree = require('./BinarySearchTree.js')

function main() {

  const numTree = new BinarySearchTree()
  const easyTree = new BinarySearchTree()

  
  numTree.insert(3,3)
  numTree.insert(1,1)
  numTree.insert(4,4)
  // numTree.insert(6,6)
  // numTree.insert(9,9)
  // numTree.insert(2,2)
  // numTree.insert(5,5)
  // numTree.insert(7,7)

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
  // console.log(isBST(arr))
  // console.log(findNth(numTree, 3))
  // console.log('numTree', isBalanced(numTree))
  // console.log('easyTree', isBalanced(easyTree))

  let tree1 = [3, 5, 4, 6, 1, 0, 2] 
  let  tree2 = [3, 1, 5, 2, 4, 6, 0]

  console.log(sameBST(tree1, tree2))

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


function findNth(node, n) {
//search the right half
//push values to an array recursively
// find 
  let values = []
  if(!node) {
    return null
  }

  if(node){
    values.push(node.value);
    dfs(node.left);
    dfs(node.right);
  }


  function dfs(node){
    if(node){
      values.push(node.value);
      dfs(node.left);
      dfs(node.right);
    }
  }
  
  return values.sort()[values.length - n]
}

function isBalanced(node) {
  let leftHeight
  let rightHeight

  leftHeight = height(node.left) + 1;
  rightHeight = height(node.right) + 1;

  console.log({ leftHeight })
  console.log({ rightHeight })

  if (leftHeight >= (rightHeight + 2) || rightHeight >= (leftHeight + 2)) {
    return false
  }
  return true
}

function sameBST(tree1, tree2) {
  if (!tree1 && !tree2) {
    return true
  }
  if (!tree1 || !tree2) {
    return false
  }
  if (tree1.length !== tree2.length || tree1[0] !== tree2[0]) {
    return false
  }

  let tree1right = [];
  let tree1left = [];
  let tree2right = [];
  let tree2left = [];

  for(i = 0; i < tree1.length; i++) {
    if (tree1[i] < tree1[0]) {
      tree1left.push(tree1[i])
    }
    else {
      tree1right.push(tree1[i])
    }
    if(tree2[i] < tree2[0]) {
      tree1right.push(tree2[i])
    }
    else {
      tree2right.push(tree2[i])
    }

    sameBST(tree2left, tree1left) 
    sameBST(tree2right, tree1right)

    return 
  }

  //first higher and first lower must be the same
}

main()