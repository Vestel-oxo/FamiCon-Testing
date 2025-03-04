const data = {{ query1.data }};  // Get the query data from Retool
const width = 600, height = 400;
const svg = d3.select("#graph").append("svg").attr("width", width).attr("height", height);

const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

svg.append("g")
  .selectAll("line")
  .data(data.links)
  .enter().append("line")
  .attr("stroke", "#999");

svg.append("g")
  .selectAll("circle")
  .data(data.nodes)
  .enter().append("circle")
  .attr("r", 10)
  .attr("fill", "blue")
  .on("mouseover", function(event, d) {
      alert(d.name + " (" + d.relation + ")");
  });

simulation.on("tick", () => {
    // Update positions dynamically
});
