var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree,treeMethods);
  newTree.children = [];

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  var length = this.children.length || 0;
  var isFound = false;
  if(this.value===target){
    isFound = true;
    return isFound;
  }else if(length>0){
    for(var i = 0; i<length; i++){
      if(this.children[i].contains(target)){
        isFound = true;
      }
    }
  }
  return isFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Insertion: O(n)
 * Search: O(n)
 */
