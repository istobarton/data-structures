var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.queueSize = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.size = function () {
  return this.queueSize;
};

queueMethods.dequeue = function () {
  var temp = this.storage[0];
  for (var i = 1; i < this.queueSize; i++){
    this.storage[i-1] = this.storage[i];
  }
  if(this.queueSize > 0){
    this.queueSize--;
  }
  return temp;
};
