

var Graph = function(){
  //properties that are needed at time of creation
  //and different for each Graph node
  this.gObj = {};
  this.connection = {};
};

Graph.prototype.addNode = function(node){
  this.gObj[node] = node;
};

Graph.prototype.contains = function(node){
  return _.contains(this.gObj,node);
};

Graph.prototype.removeNode = function(node){
  delete this.gObj[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var edge1 = fromNode + toNode;
  var edge2 = toNode + fromNode;
  return _.contains(this.connection, edge1) || _.contains(this.connection, edge2);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var edge1 = fromNode + toNode;
  var edge2 = toNode + fromNode;
  this.connection[edge1] = edge1;
  this.connection[edge2] = edge2
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var edge1 = fromNode + toNode;
  var edge2 = toNode + fromNode;
  delete this.connection[edge1];
  delete this.connection[edge2];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.gObj, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



