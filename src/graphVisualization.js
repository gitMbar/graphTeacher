var width = 960,
    height = 500;

var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(30)
    .size([width, height]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

graph = new Graph()
graph.addVertex("bob");
graph.addVertex("mike");
graph.addEdge("bob", "mike");
console.log(graph.nodes)
console.log(graph.links)

force
    .nodes(graph.nodes) ///graph is where the data comes from
    .links(graph.links)
    .start();

var link = svg.selectAll(".link")
    .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

var node = svg.selectAll(".node")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .style("fill", function(d) { return color(d.group); })
      .call(force.drag);

node.append("title")
    .text(function(d) { return d.name; });

force.on("tick", function() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});

var update = function(){
  
}


$("#addVertexInput").on("keypress", function(event) {
    if(event.which == 13) {
        event.preventDefault();
        console.log('hisf')
        val = $(this).val();
          if (graph === undefined){
            graph = new Graph();
          }
          graph.addVertex(val);
          //update();
        $(this).val("")
    }
});