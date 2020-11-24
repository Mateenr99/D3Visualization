function init(elements) {
  
  let jsonData;

  let canvasW = 600;
  let canvasH = 600;
  
  let margin = 1;
  let w = canvasW - (margin * 10);
  let h = canvasH - (margin * 250);
  let xinc = w / 8;
  let yinc = h / 10;
  
  let svg = d3.select("body").append("svg")
    .attr("width", canvasW)
    .attr("height", canvasH)
    .style("background-color", d3.color("#ede7e3") )
    ;


  let jsonDays = elements.filter( e => {  return e.day == "Tuesday" || e.day == "Wednesday" || e.day == "Thursday" || e.day == "Friday" || e.day == "Saturday" || e.day == "Sunday" || e.day == "Monday" ;  } );


  let circles = svg.selectAll()
    .data(jsonDays)
    .enter().append("g") //when we are seeing new data for the first time

    .on("mouseover", handleMouseOver_CircleText)

    .on("mouseout", handleMouseOut_CircleText)

    circles.append("circle") //append a circle shape for each data point, and set various attributes based on the data
        .attr("fill", d3.color("rgba(0,0,0,0)")  )
        .attr("cx", d => { return margin + (d.daynumb * xinc); })
        .attr("cy", d => { return canvasH - (d.number * yinc) ;} )
        .attr("r", 30)
        .attr("stroke", d3.color("rgba(22, 105, 122, 1)") )
        .attr("stroke-width", 12)

    circles.append("text")
        .attr("text-anchor","middle")
        .attr("font-family", "sans-serif")
        .attr("font-size", "16px")
        .attr("fill", d3.color("rgba(22, 105, 122,0)"))
        .attr("x", d => { return margin + (d.daynumb * xinc); })
        .attr("y", d => { return canvasH - (d.number * yinc) + 7; })
        .text(d => {return d.number})
        ;
    
        
	  circles.append("text")
        .attr("text-anchor","middle")
        .attr("font-family", "sans-serif")
        .attr("font-size", "16px")
        .attr("fill", d3.color("rgba(22, 105, 122,0)"))
        .attr("x", 300)
        .attr("y", 530)
        .text(d => {return d.day})
        ;
  ;  


  

  function handleMouseOver_CircleText(d, i) {
    d3.select(this).selectChild("circle")
      .transition()
      .duration(500)
      .attr("r", 40)
      .attr("stroke-width", 8)
	    .attr("stroke", d3.color("rgba(2, 195, 154, 1)"))
    
    d3.select(this).selectAll("text")
      .transition()
      .duration(500)
      .attr("font-size", "25px")
      .attr("fill", d3.color("rgba(2, 195, 154, 1)"))
  }
  

  function handleMouseOut_CircleText(d, i) {
    d3.select(this).selectChild("circle")
      .transition()
      .duration(500)
      .attr("r", 30)
      .attr("stroke-width", 12)
      .attr("stroke", d3.color("rgba(72, 159, 181, 1)"))
	
    d3.select(this).selectAll("text")
      .transition()
      .duration(500)
      .attr("font-size", "16px")
      .attr("fill", d3.color("rgba(72, 159, 181, 0)"))
  }




  //Lines of Chart
const Yline = svg.append("polygon")
    .attr("fill", "#16697A") 
    .attr("points", "30,20  35,22  35,560  30,555" );
  

const Xline = svg.append("polygon")
    .attr("fill", "#16697A") 
    .attr("points", "30,555  32,560  555,560  560,555" );

  //Phone Art
const polyPhone = svg.append("rect")
  .attr("stroke", "#ffa62b")
  .attr("stroke-width", 6)
  .attr("fill", "#023047")
  .attr("x", 485)
  .attr("y", 10)
  .attr("height", 150)
  .attr("width", 100);

const phoneScreen = svg.append("rect")
  .attr("fill", "#489fb5")
  .attr("x", 490)
  .attr("y", 20)
  .attr("height", 110)
  .attr("width", 90);

const homeButton = svg.append("circle")
  .attr("cx", 535)
  .attr("cy", 145)
  .attr("fill", "#ffa62b")
  .attr("r", 10);



  //X and Y Axis Texts
const xText = svg.append("text")
  .attr("x", 300)
  .attr("y", 585)
  .attr("text-anchor", "middle")
  .attr("font-family", "sans-serif")
  .attr("font-size", "24px")
  .attr("fill", "#16697A")
  .text("Days");

 const yText = svg.append("text")
  .attr("text-anchor", "middle")
  .attr("font-family", "sans-serif")
  .attr("font-size", "20px")
  .attr("fill", "#16697A")
  .attr("transform", "translate(10,300) rotate(90)")
  .text("Number of times I check my phone mindlessly");

}