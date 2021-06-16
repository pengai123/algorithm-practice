class binaryTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
//         1
//      2    3
//    4  5  6  7
//         8
// find the path of a node in binary tree

function pathToNode(root, val) {
  let path = [];
  function helper(rt) {
    //root is null
    if (rt === null) {
      return false;
    }
    path.push(rt.value)
    //found the value
    if (rt.value === val) {
      return true;
    }
    if (helper(rt.left) || helper(rt.right)) {
      return true;
    } else {
      path.pop();
      return false;
    }
  }
  helper(root);
  return path;
}


let root1 = new binaryTree(1)
root1.left = new binaryTree(2)
root1.right = new binaryTree(3)
root1.left.left = new binaryTree(4)
root1.right.right = new binaryTree(7)
root1.right.left = new binaryTree(6)
root1.left.right = new binaryTree(5)
root1.right.left.right = new binaryTree(8)
console.log('root1:', root1)
console.log(pathToNode(root1, 4))