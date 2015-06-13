var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head===null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    var temp;
    if(list.head===list.tail){
      temp = list.head.value;
      list.head = null;
      list.tail = null;
      return temp;
    } else {
      temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }
  };

  list.contains = function(target){
    var result = false;
    var currentNode = list.head;
    while (currentNode !== list.tail){
     if (currentNode.value === target){
      result = true;
      break;
     } else {
       currentNode = currentNode.next;
     }
    }

    if (currentNode.value === target){
      result = true;
    }

    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Insertion / Deletion: O(1)
 * Search: O(n)
 */

