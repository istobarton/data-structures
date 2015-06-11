var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
};

//push
Stack.prototype.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};
//pop
Stack.prototype.pop = function () {
  var temp = this.storage[this.stackSize-1];
  delete this.storage[this.stackSize-1];
  if(this.stackSize > 0) {
    this.stackSize--;
  }
  return temp;
};
//size
Stack.prototype.size = function() {
  return this.stackSize;
};
