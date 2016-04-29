
var width= window.innerWidth,
      height= window.innerHeight;
var fill = d3.scale.category20();

var kwd_width = width;
var kwd_height= 0.8*height;

// scale to map relevance of words to font size
var fontSizeRange = d3.scale.linear();

function d3_draw_words(keywords) {

  var kwds = keywords;

  var words;
  words = kwds.map(function(d) {
    return {text: d.text, size: 6 + d.relevance * 70};
  }); 
  
// Find range of relevance values
  var max = words[0].size;
  var min = words[words.length-1].size;
  fontSizeRange
	.domain([min,max])
	.range([8,20]);

  d3.layout.cloud().size([kwd_width, kwd_height])
    .words(words)
    .padding(10)
    .rotate(function() { return 0; })
    //.font("Impact")
    .font("Times New Roman")
    .text(function(d) {return d.text;})
    .fontSize(function(d) {return fontSizeRange(d.size); })
    .on("end", drawKwds)
      .start();
}

function drawKwds(words) {
  d3.select("#keywords-cloud").append("svg")
	.attr("width",kwd_width)
	.attr("height",kwd_height)
    .append("g")
      .attr("transform", "translate(" + kwd_width/2 + "," + kwd_height/2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      //.style("font-family", "Impact")
      .style("font-family", "Times New Roman")
      .style("fill", function(d, i) {return fill(i); })
      .attr("text-anchor", "left")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}
