var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for(var i=0; i<this._limit; i++){
    this._storage.set(i,[]);
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var a = [k,v];
  this._storage.get(i).push(a);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage.get(i).length; j++){
    if(this._storage.get(i)[j][0]===k){
      return this._storage.get(i)[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage.get(i).length; j++){
    if(this._storage.get(i)[j][0]===k){
      this._storage.get(i)[j][1]=null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
