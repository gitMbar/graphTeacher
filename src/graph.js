var Graph = function(){
	this.nodes = [];
	this.links = [];
};

Graph.prototype.addVertex = function(vert){
	if (!this.contains(vert)){
		this.nodes.push({"id": vert, "group": 1})
	}
};

Graph.prototype.findIndex = function(vert){
	var index = -1;
	for (var i = 0; i < this.nodes.length; i++){
		if (this.nodes[i].id === vert) return i;
	}
	return index;
}

Graph.prototype.addEdge = function(from, to){
	if (!this.contains(from) || !this.contains(to)){
		alert("Both vertices must exist!");
	} else {
		fromIndex = this.findIndex(from);
		toIndex = this.findIndex(to);
		this.links.push({"source": fromIndex, "target": toIndex, "value": 10})
	}
};

Graph.prototype.contains = function(vert){
  var found = false;
  for (var i = 0; i < this.nodes.length; i++){
  	if (this.nodes[i].id === vert){
  		found = true
  	}
  }
  return found;
};