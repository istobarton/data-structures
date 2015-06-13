var BinarySearchTree = function(value){
  var newBST = Object.create(BinarySearchTree.methods);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function (input) {
  if(this.value > input && this.left !== null){
    this.left.insert(input);
  } else if (this.value > input) {
    this.left = new BinarySearchTree(input);
  } else if (this.value < input && this.right !== null){
      this.right.insert(input);
  } else if (this.value < input) {
    this.right = new BinarySearchTree(input);
  } else {
    return;
  }
};

BinarySearchTree.methods.contains = function (input) {
  var parent = this;
  var wasFound = false;
  var recurse = function(parent){
    if (parent.value > input && parent.left !== null){
      recurse(parent.left);
    } else if (parent.value > input) {
      return;
    } else if (parent.value < input && parent.right !== null){
        recurse(parent.right);
    } else if (parent.value < input) {
      return;
    } else {
      wasFound = true;
      return;
    }
  };
  recurse(parent);

  return wasFound;
};

BinarySearchTree.methods.depthFirstLog = function (input) {
  input(this.value);

  if (this.left !== null){
    this.left.depthFirstLog(input);
  }

  if (this.right !== null){
    this.right.depthFirstLog(input);
  }

  return;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Insertion / Deletion / Search: Average - O(log(n)), Worst Case - O(n)
 */











