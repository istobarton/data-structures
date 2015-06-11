var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.theSize = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.theSize] = value;
  this.theSize++;
};

queueMethods.size = function () {
  return this.theSize;
};

queueMethods.dequeue = function (value) {
  var temp = this.storage[0];
  for(var i = 1; i<this.theSize; i++){
    this.storage[i-1]=this.storage[i];
  }
  if(this.theSize>0){
    this.theSize--;
  }
  // debugger;
  return temp;
};




//   var temp = this.storage[this.theSize-1];
//   delete this.storage[this.theSize-1];
//   if(this.theSize > 0) {
//     this.theSize--;
//   }
//   return temp;
// }

// function extend (to, from) {
//   for (var key in from){
//     to[key] = from[key];
//   }
// };

