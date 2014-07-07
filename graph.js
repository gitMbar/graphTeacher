var Graph = function(){
	this.storage = {"nodes": [], "links": []};
};

Graph.prototype.addVertex = function(vert){
	if (!this.contains(vert)){
		this.storage.nodes.push({"name": vert, "group": 1})
	}
};

Graph.prototype.findIndex = function(vert){
	var index = -1;
	for (var i = 0; i < this.storage.nodes.length; i++){
		if (this.storage.nodes[i].name === vert) return i;
	}
	return index;
}

Graph.prototype.addEdge = function(from, to){
	if (!this.contains(from) || !this.contains(to)){
		alert("Both vertices must exist!");
	} else {
		fromIndex = this.findIndex(from);
		toIndex = this.findIndex(to);
		this.storage.links.push({"source": fromIndex, "target": toIndex, "value": 10})
	}
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