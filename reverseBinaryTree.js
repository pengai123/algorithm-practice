function invertBinaryTree(root) {
  if (!root) {
    return null;
  }
  // let temp = root.left;
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}