// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
const { returns } = require("chai-spies");

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if(!this.root){
      this.root = this.root = new TreeNode(val)
      return this.root
    }

    //add to left
    if(val < currentNode.val){
      if(!currentNode.left){
        currentNode.left = new TreeNode(val);
      }else{
        this.insert(val, currentNode.left)
      }
    }
    //add to right
    else{
      if(!currentNode.right){
        currentNode.right = new TreeNode(val)
      }else{
        this.insert(val, currentNode.right)
      }
    }
  }

  search(val, currentNode = this.root) {
    // Your code here
    if(!currentNode){
      return false;
    }
    if(currentNode.val === val){
      return true;
    }

    if(val < currentNode.val){
      return this.search(val, currentNode.left)
    }else{
      return this.search(val, currentNode.right)
    }
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode){
      return;
    }
    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);

  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode){
      return;
    }

    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode){
      return;
    }
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
    const queue = [];
    if(this.root) queue.push(this.root);
    while(queue.length){
      let currentNode = queue.shift();
      console.log(currentNode.val)

      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
    const stack = [];
    if (this.root) stack.push(this.root);

    while (stack.length > 0) {
      let currentNode = stack.pop();
      console.log(currentNode.val);  // Visit the current node

      // Push right first so that left is processed first
      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);
    }

  }
}

module.exports = { BinarySearchTree, TreeNode };
