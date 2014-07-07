var Graph = function(){
	this.storage = {"nodes": [], "links": []};
};

Graph.prototype.addVertex = function(vert){
	if (!this.contains(vert)){
		this.storage.nodes.push({"name": vert, "group": 1})
	}
};

Graph.prototype.addEdge = function(from, to){

};

Graph.prototype.contains = function(vert){
  var found = false;
  for (var i = 0; i < this.storage.nodes.length; i++){
  	if (this.storage.nodes[i].name === vert){
  		found = true
  	}
  }
  return found;
};