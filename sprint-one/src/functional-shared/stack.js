var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.theSize = 0;
  extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {
};

stackMethods.push = function (value) {
  this.storage[this.theSize] = value;
  this.theSize++;
};

stackMethods.size = function () {
  return this.theSize;
};

stackMethods.pop = function (value) {
  var temp = this.storage[this.theSize-1];
  delete this.storage[this.theSize-1];
  if(this.theSize > 0) {
    this.theSize--;
  }
  return temp;
}

function extend (to, from) {
  for (var key in from){
    to[key] = from[key];
  }
};
