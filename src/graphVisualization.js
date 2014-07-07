graph = new Graph()

var width = 960,
    height = 500;

var color = d3.scale.category20();

var force = d3.layout.force()
      .nodes(graph.nodes) ///graph is where the data comes from
      .links(graph.links)
      .charge(-90)
      .linkDistance(90)
      .size([width, height]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

graph.addVertex("bob");
graph.addVertex("mike");
graph.addEdge("bob", "mike");
console.log(graph.nodes)
console.log(graph.links)

var update = function(){



  var node = svg.selectAll(".node")
      .data(graph.nodes)
      
  node.exit().transition().duration(100).remove()

  var nodeEnter = node.enter().append("circle")
        .attr("class", "node")
        .attr("r", 6)
        .style("fill", function(d) { return color(d.group); })
        .call(force.drag);

  nodeEnter.append("title")
      .text(function(d) { return d.name; });

  var link = svg.selectAll(".link")
      .data(force.links(), function(d){ return d.source.index + "-" + d.target.index; });

  var linkEnter = link.enter().insert("line", ".node")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  link.exit().transition().duration(100).remove()
  
  force.start();

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  });


}

//only for testing.  No need to update blank graph
update()

var addEdgeInput = function(){
 if(event.which == 13) {
        event.preventDefault();
        console.log('adding edge')
        var a = $("#addEdgeInputA").val();
        var b = $("#addEdgeInputB").val();
          if (graph === undefined || !graph.contains(a) || !graph.contains(b)){
            alert("NYOOOPE")
          } else {
              graph.addEdge(a, b);
              update();
            }
        $(this).val("")
    }
}

//Add a vertex via addVertexInput field
$("#addVertexInput").on("keypress", function(event) {
    if(event.which == 13) {
        event.preventDefault();
        console.log('hisf')
        val = $(this).val();
          if (graph === undefined){
            graph = new Graph();
          }
          graph.addVertex(val);
          update();
        $(this).val("")
    }
});

$("#addEdgeInputA").on("keypress", addEdgeInput);
$("#addEdgeInputB").on("keypress", addEdgeInput);
