var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var length = Object.keys(storage).length;
    storage[length]=value;
  };

  someInstance.dequeue = function(){
    var length = Object.keys(storage).length;
    var temp = storage[0];
    for(var i=1; i<length; i++){
      storage[i-1]=storage[i];
    }
    delete storage[length-1];
    return temp;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
