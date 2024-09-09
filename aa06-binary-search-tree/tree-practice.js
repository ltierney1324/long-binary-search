const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  if(rootNode === null){
    throw new Error("The tree is empty");
  }

  let current = rootNode;
  while(current.left){
    current = current.left
  }

  return current.val;

}

function findMaxBST (rootNode) {
  // Your code here
  if(rootNode === null){
    throw new Error("The tree is empty");
  }

  let current = rootNode;
  while(current.right){
    current = current.right;
  }

  return current.val;
}

function findMinBT (rootNode) {
  // Your code here
  let queue = [rootNode];
  let min = rootNode.val;

  while(queue.length > 0){
    let current = queue.shift();
    if(min > current.val){
      min = current.val;
    }

    //compare min to every node value
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);

  }

  return min;
  /*
  let smallest = rootNode.val;

  if(rootNode.left){
    smallest = Math.min(smallest, findMinBT(rootNode.left));
  }
  if(rootNode.right){
    smallest = Math.min(smallest, findMinBT(rootNode.right));
  }

  return smallest;
  */
}

function findMaxBT (rootNode) {
  // Your code here
  let queue = [rootNode];
  let max = rootNode.val;

  while(queue.length > 0){
    let current = queue.shift();
    if(max < current.val){
      max = current.val;
    }

    //compare min to every node value
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);

  }

  return max;

}

function getHeight (rootNode) {
  // Your code here
  if(!rootNode){
    return -1;
  }else if(!rootNode.left && !rootNode.right){
    return 0;
  }else{
    return 1+ Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
  }


}

function balancedTree (rootNode) {
  // Your code here
  let queue = [rootNode];

  while(queue.length > 0){
    let current = queue.shift();
    if(Math.abs(getHeight(current.left) - getHeight(current.right)  )>1){
      return false;
    }

    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }

  return true;

}

function countNodes (rootNode) {
  // Your code here
  let count = 0;
  if(!rootNode){
    return count;
  }

  let queue = [rootNode];
  while(queue.length >0){
    let current = queue.shift();
    count++;
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  return count;
}

function getParentNode (rootNode, target) {
  // Your code here
  let queue = [rootNode];
  while(queue.length >0){
    let current = queue.shift();
    let leftChild = current.left;
    let rightChild = current.right;
    if(leftChild){
      if(leftChild.val === target){
        return current;
      }else{
        queue.push(leftChild)
      }
    }
    if(rightChild){
      if(rightChild.val === target){
        return current
      }else{
        queue.push(rightChild);
      }
    }
    if(rootNode.val === target){
      return null;
    }
  }

}

function inOrderHelper(rootNode, results = []){
  if(rootNode.left){
    results.push(...inOrderHelper(rootNode.left))
  }
  results.push(rootNode.val)

  if(rootNode.right){
    results.push(...inOrderHelper(rootNode.right))
  }

  return results;
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
  let inOrderArray = inOrderHelper(rootNode);
  if(inOrderArray[0]===target){
    return null;
  }

  let targetIndex = inOrderArray.indexOf(target);
  return inOrderArray[targetIndex-1];

}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
