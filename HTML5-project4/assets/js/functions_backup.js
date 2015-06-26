var jQuery = jQuery.noConflict();



jQuery('.nav-tabs li:nth-child(2)').on('shown.bs.tab', function (e) {
// 		var randomScalingFactor = function(){ return Math.round(Math.random()*25)};
		var lineChartData2 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [97, 108, 75, 50, 81, 58, 103, 58, 59, 65, 56, 66, 85] 
				}
			]

		}
		
var lineChartData3 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "#fff",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "#fff",	
 					data : [104, 55, 57, 45, 105, 100, 74, 66, 59, 74, 42, 78, 110] 
				},
				{
					label: "My Third dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "#fff",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "#fff",	
 					data : [97, 108, 75, 50, 81, 58, 103, 58, 59, 65, 56, 66, 85] 
				}
			]

		}		
		
var lineChartData4 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "#fff",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "#fff",	
 					data : [104, 55, 57, 45, 105, 100, 74, 66, 59, 74, 42, 78, 110] 
				},
				{
					label: "My Third dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "#fff",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "#fff",	
 					data : [97, 108, 75, 50, 81, 58, 103, 58, 59, 65, 56, 66, 85] 
				},
				{
					label: "My Fourth dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "#fff",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "#fff",	
 					data : [150, 145, 125, 75, 120, 110, 75, 65, 45, 42, 90, 52, 100] 
				}
			]

		}			

	//window.onload = function(){
if(document.getElementById("canvas2")!= null){
	var ctx2 = document.getElementById("canvas2").getContext("2d");
	window.myLine = new Chart(ctx2).Line(lineChartData2, {
		responsive: true,
		scaleShowGridLines : false,
		showScale: true,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		pointDotStrokeWidth : 2,
		datasetStroke : true,
		bezierCurve: false,
		animationEasing: "easeOutQuart",	
		scaleFontSize: 14,
		animationSteps: 40
	});

}

if(document.getElementById("canvas3")!= null){
	var ctx3 = document.getElementById("canvas3").getContext("2d");
	window.myLine = new Chart(ctx3).Line(lineChartData3, {
		responsive: true,
		scaleShowGridLines : false,
		showScale: true,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		pointDotStrokeWidth : 2,
		datasetStroke : true,
		bezierCurve: false,
		animationEasing: "easeOutQuart",	
		scaleFontSize: 14,
		animationSteps: 40
	});
}


	
//Doughnut Chart 

//allmetrics
function DoughnutChart_allmetrics(){
		var doughnutData2 = [
						{
							value: 5.34,
							color:"#e46a55",
							highlight: "#c64028",
							label: "Lupita Borman, All Metrics: 60, Contribution %"
						},
						{
							value: 5.96,
							color: "#6279c9",
							highlight: "#4460c1",
							label: "Ernest Stickney, All Metrics: 67, Contribution %"
						},
						{
							value: 8.45,
							color: "#44c2f5",
							highlight: "#28abe0",
							label: "Rex Obrien, All Metrics: 95, Contribution %"
						},
						{
							value: 7.56,
							color: "#79c950",
							highlight: "#5db72f",
							label: "Jutta Spates, All Metrics: 85, Contribution %"
						},
						{
							value: 9.16,
							color: "#dcac6c",
							highlight: "#bd8233",
							label: "Genevive Deblak, All Metrics: 103, Contribution %"
						},
						{
							value: 5.69,
							color: "#dc6c6c",
							highlight: "#c34646",
							label: "Maile Pollitt, All Metrics: 64, Contribution %"
						},
						{
							value: 4.00,
							color: "#ae9f9f",
							highlight: "#957171",
							label: "Vita Schoonmaker, All Metrics: 45, Contribution %"
						},
						{
							value: 9.43,
							color: "#fff7a3",
							highlight: "#ebdc41",
							label: "Lorine Norton, All Metrics: 106, Contribution %"
						},
						{
							value: 7.21,
							color: "#2cdfea",
							highlight: "#0cbbc6",
							label: "Erinn Evenson, All Metrics: 81, Contribution %"
						},
						{
							value: 5.96,
							color: "#97850c",
							highlight: "#726408",
							label: "Nga Thelkeld, All Metrics: 67, Contribution %"
						},
						{
							value: 4.45,
							color: "#1d53c0",
							highlight: "#0e41a7",
							label: "Crista Odum, All Metrics: 50, Contribution %"
							
						},
						{
							value: 8.27,
							color: "#dcd56c",
							highlight: "#bdb542",
							label: "Onita Seymour, All Metrics: 93, Contribution %"
						},
						{
							value: 6.05,
							color: "#b8dc6c",
							highlight: "#99c045",
							label: "Bob Brandford, All Metrics: 68, Contribution %"
						},
						{
							value: 5.87,
							color: "#e559dd",
							highlight: "#d340ca",
							label: " Julie Sham,  All Metrics: 66,  Contribution %"
						},
						{
							value: 6.58,
							color: "#dbe84e",
							highlight: "#c0cc37",
							label: "Barbie Taylor, All Metrics: 74, Contribution %"
							
						}
						
					];
		
		if(document.getElementById("chart-area2") != null){
			var ctx2 = document.getElementById("chart-area2").getContext("2d");
		/*				window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true, segmentShowStroke : false, percentageInnerCutout:69, animateRotate : false, legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><span style=\"float:right\"><%=segments[i].value%></span><%}%></li><%}%></ul>"});
		*/			
		
		window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData2, {responsive : true,tooltipCaretSize: 0, segmentShowStroke : false, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", tooltipFillColor: "rgba(255,255,255, 1)", tooltipFontColor: "#3e3f54", percentageInnerCutout:69, animateRotate : false, legendTemplate : "<table class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><tr><td><span class=\"color\" style=\"background-color:<%=segments[i].fillColor%>\"></span></td><td class=\"name\"><%if(segments[i].label){%><%=segments[i].label%></td><td class=\"value\"><span><%=segments[i].value%></span></td><%}%></tr><%}%></table>"});
			
		document.getElementById('my-doughnut-legend2').innerHTML = myDoughnut.generateLegend({});
		myDoughnut.generateLegend();
		}
 	
	}

//opportunities
function DoughnutChart_opportunities(){
		var doughnutData = [
						{
							value: 4.81,
							color:"#e46a55",
							highlight: "#c64028",
							label: "Lupita Borman, Opportunities: 45, Contribution %"
						},
						{
							value: 5.99,
							color: "#6279c9",
							highlight: "#4460c1",
							label: "Ernest Stickney, Opportunities: 56, Contribution %"
						},
						{
							value: 8.13,
							color: "#44c2f5",
							highlight: "#28abe0",
							label: "Rex Obrien, Opportunities: 76, Contribution %"
						},
						{
							value: 7.27,
							color: "#79c950",
							highlight: "#5db72f",
							label: "Jutta Spates, Opportunities: 68, Contribution %"
						},
						{
							value: 9.30,
							color: "#dcac6c",
							highlight: "#bd8233",
							label: "Genevive Deblak, Opportunities: 87, Contribution %"
						},
						{
							value: 5.99,
							color: "#dc6c6c",
							highlight: "#c34646",
							label: "Maile Pollitt, Opportunities: 56, Contribution %"
						},
						{
							value: 4.06,
							color: "#ae9f9f",
							highlight: "#957171",
							label: "Vita Schoonmaker, Opportunities: 38, Contribution %"
						},
						{
							value: 9.41,
							color: "#fff7a3",
							highlight: "#ebdc41",
							label: "Lorine Norton, Opportunities: 88, Contribution %"
						},
						{
							value: 4.81,
							color: "#2cdfea",
							highlight: "#0cbbc6",
							label: "Erinn Evenson, Opportunities: 69, Contribution %"
						},
						{
							value: 6.31,
							color: "#97850c",
							highlight: "#726408",
							label: "Nga Thelkeld, Opportunities: 59, Contribution %"
						},
						{
							value: 4.60,
							color: "#1d53c0",
							highlight: "#0e41a7",
							label: "Crista Odum, Opportunities: 43, Contribution %"
							
						},
						{
							value: 8.13,
							color: "#dcd56c",
							highlight: "#bdb542",
							label: "Onita Seymour, Opportunities: 76, Contribution %"
						},
						{
							value: 5.78,
							color: "#b8dc6c",
							highlight: "#99c045",
							label: "Bob Brandford, Opportunities: 54, Contribution %"
						},
						{
							value: 6.10,
							color: "#e559dd",
							highlight: "#d340ca",
							label: " Julie Sham,  Opportunities: 54,  Contribution %"
						},
						{
							value: 6.74,
							color: "#dbe84e",
							highlight: "#c0cc37",
							label: "Barbie Taylor, Opportunities: 63, Contribution %"
							
						}
						
					];
		
		if(document.getElementById("chart-area") != null){
			var ctx = document.getElementById("chart-area").getContext("2d");
		/*				window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true, segmentShowStroke : false, percentageInnerCutout:69, animateRotate : false, legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><span style=\"float:right\"><%=segments[i].value%></span><%}%></li><%}%></ul>"});
		*/			
		
		window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true,tooltipCaretSize: 0, segmentShowStroke : false, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", tooltipFillColor: "rgba(255,255,255, 1)", tooltipFontColor: "#3e3f54", percentageInnerCutout:69, animateRotate : false, legendTemplate : "<table class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><tr><td><span class=\"color\" style=\"background-color:<%=segments[i].fillColor%>\"></span></td><td class=\"name\"><%if(segments[i].label){%><%=segments[i].label%></td><td class=\"value\"><span><%=segments[i].value%></span></td><%}%></tr><%}%></table>"});
			
		document.getElementById('my-doughnut-legend').innerHTML = myDoughnut.generateLegend({});
		myDoughnut.generateLegend();
		}
 }

//sales
function DoughnutChart_sales(){
		var doughnutData3 = [
						{
							value: 7.94,
							color:"#e46a55",
							highlight: "#c64028",
							label: "Lupita Borman, Sales: 15, Contribution %"
						},
						{
							value: 5.82,
							color: "#6279c9",
							highlight: "#4460c1",
							label: "Ernest Stickney, Sales: 11, Contribution %"
						},
						{
							value: 10.05,
							color: "#44c2f5",
							highlight: "#28abe0",
							label: "Rex Obrien, Sales: 19, Contribution %"
						},
						{
							value: 8.99,
							color: "#79c950",
							highlight: "#5db72f",
							label: "Jutta Spates, Sales: 17, Contribution %"
						},
						{
							value: 8.47,
							color: "#dcac6c",
							highlight: "#bd8233",
							label: "Genevive Deblak, Sales: 16, Contribution %"
						},
						{
							value: 4.23,
							color: "#dc6c6c",
							highlight: "#c34646",
							label: "Maile Pollitt, Sales: 8, Contribution %"
						},
						{
							value: 3.70,
							color: "#ae9f9f",
							highlight: "#957171",
							label: "Vita Schoonmaker, Sales: 7, Contribution %"
						},
						{
							value: 9.52,
							color: "#fff7a3",
							highlight: "#ebdc41",
							label: "Lorine Norton, Sales: 18, Contribution %"
						},
						{
							value: 6.35,
							color: "#2cdfea",
							highlight: "#0cbbc6",
							label: "Erinn Evenson, Sales: 12, Contribution %"
						},
						{
							value: 4.23,
							color: "#97850c",
							highlight: "#726408",
							label: "Nga Thelkeld, Sales: 8, Contribution %"
						},
						{
							value: 3.70,
							color: "#1d53c0",
							highlight: "#0e41a7",
							label: "Crista Odum, Sales: 7, Contribution %"
							
						},
						{
							value: 8.99,
							color: "#dcd56c",
							highlight: "#bdb542",
							label: "Onita Seymour, Sales: 17, Contribution %"
						},
						{
							value: 7.41,
							color: "#b8dc6c",
							highlight: "#99c045",
							label: "Bob Brandford, Sales: 14, Contribution %"
						},
						{
							value: 4.76,
							color: "#e559dd",
							highlight: "#d340ca",
							label: "Julie Sham,  Sales: 9,  Contribution %"
						},
						{
							value: 5.82,
							color: "#dbe84e",
							highlight: "#c0cc37",
							label: "Barbie Taylor, Sales: 11, Contribution %"
							
						}
						
					];
		
		if(document.getElementById("chart-area3") != null){
			var ctx3 = document.getElementById("chart-area3").getContext("2d");
		/*				window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true, segmentShowStroke : false, percentageInnerCutout:69, animateRotate : false, legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><span style=\"float:right\"><%=segments[i].value%></span><%}%></li><%}%></ul>"});
		*/			
		
		window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData3, {responsive : true,tooltipCaretSize: 0, segmentShowStroke : false, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", tooltipFillColor: "rgba(255,255,255, 1)", tooltipFontColor: "#3e3f54", percentageInnerCutout:69, animateRotate : false, legendTemplate : "<table class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><tr><td><span class=\"color\" style=\"background-color:<%=segments[i].fillColor%>\"></span></td><td class=\"name\"><%if(segments[i].label){%><%=segments[i].label%></td><td class=\"value\"><span><%=segments[i].value%></span></td><%}%></tr><%}%></table>"});
			
		document.getElementById('my-doughnut-legend3').innerHTML = myDoughnut.generateLegend({});
		myDoughnut.generateLegend();
		}
		
 	}



jQuery(document).ready(function(){
   DoughnutChart_allmetrics();

  jQuery('#graph2-options-li-1 > label').click(function(){
	  
	jQuery('#DoughnutChart-allmetrics').css({"display":"block"});
	jQuery('#DoughnutChart-opportunities').css({"display":"none"});	  
	jQuery('#DoughnutChart-sales').css({"display":"none"});	
	DoughnutChart_allmetrics();  
  });
  
  jQuery('#graph2-options-li-2 > label').click(function(){
	
	jQuery('#DoughnutChart-allmetrics').css({"display":"none"});
	jQuery('#DoughnutChart-opportunities').css({"display":"block"});	  
	jQuery('#DoughnutChart-sales').css({"display":"none"});	
	 DoughnutChart_opportunities();
  });
  
  jQuery('#graph2-options-li-3 > label').click(function(){
	 
	jQuery('#DoughnutChart-allmetrics').css({"display":"none"});
	jQuery('#DoughnutChart-opportunities').css({"display":"none"});	  
	jQuery('#DoughnutChart-sales').css({"display":"block"});	
	DoughnutChart_sales();  
  });

});

});


////////////////////////////////////////////////////////////////////////////////////
// Frontend charts 
////////////////////////////////////////////////////////////////////////////////////
jQuery('.fe.nav-tabs li:nth-child(2)').on('shown.bs.tab', function (e) {

//chart metrics	
function metrics_chart_FE(){

			var lineChartData11 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [9, 12, 25, 18, 16, 5, 3, 15, 34, 20, 22, 4, 2] 
				}
			]

		}

	//window.onload = function(){
	var ctx11 = document.getElementById("canvas11").getContext("2d");
	window.myLine = new Chart(ctx11).Line(lineChartData11, {
		responsive: true,
		scaleShowGridLines : false,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		 pointDotStrokeWidth : 2,
		 datasetStroke : true,
		 bezierCurve: false,
		 animationEasing: "easeOutQuart",	
		 scaleFontSize: 14,
		 animationSteps: 40
		 
	});
}

// chart opportunities
function opportunities_chart_FE(){
		var lineChartData12 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [7, 12, 23, 16, 11, 4, 3, 12, 29, 18, 21, 3, 2] 
				}
			]

		}

	//window.onload = function(){
	var ctx12 = document.getElementById("canvas12").getContext("2d");
	window.myLine = new Chart(ctx12).Line(lineChartData12, {
		responsive: true,
		scaleShowGridLines : false,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		 pointDotStrokeWidth : 2,
		 datasetStroke : true,
		 bezierCurve: false,
		 animationEasing: "easeOutQuart",	
		 scaleFontSize: 14,
		 animationSteps: 40
		 
	});
	
	}

// chart sales
function sales_chart_FE(){
	var lineChartData13 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [1, 0, 2, 2, 5, 1, 0, 3, 5, 2, 1, 1, 0] 
				}
			]

		}

	//window.onload = function(){
	var ctx13 = document.getElementById("canvas13").getContext("2d");
	window.myLine = new Chart(ctx13).Line(lineChartData13, {
		responsive: true,
		scaleShowGridLines : false,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		 pointDotStrokeWidth : 2,
		 datasetStroke : true,
		 bezierCurve: false,
		 animationEasing: "easeOutQuart",	
		 scaleFontSize: 14,
		 animationSteps: 40
		 
	});
}

	
//Contest Trends - tabs - frontend
jQuery(document).ready(function(){
  opportunities_chart_FE();

  jQuery('#graph1-options-li-1 > label').click(function(){
	  
	jQuery('#fe-graph-metrics').css({"display":"block"});
	jQuery('#fe-graph-oppor').css({"display":"none"});	  
	jQuery('#fe-graph-sales').css({"display":"none"});	
	jQuery('.dropdown-wrap').css({"display":"none"});		
	metrics_chart_FE();  
  });
  
  jQuery('#graph1-options-li-2 > label').click(function(){
	
	jQuery('#fe-graph-metrics').css({"display":"none"});	  
	jQuery('#fe-graph-oppor').css({"display":"block"});	  
	jQuery('#fe-graph-sales').css({"display":"none"});	
	jQuery('.dropdown-wrap').css({"display":"none"});			  
	opportunities_chart_FE();
  });
  
  jQuery('#graph1-options-li-3 > label').click(function(){
	 
	jQuery('#fe-graph-metrics').css({"display":"none"});	  
	jQuery('#fe-graph-oppor').css({"display":"none"});	  
	jQuery('#fe-graph-sales').css({"display":"block"});		
	jQuery('.dropdown-wrap').css({"display":"none"});			
	sales_chart_FE();  
  });

});	
	

//Teamwise chart - tabs - frontend
jQuery(document).ready(function(){
  opportunities_chart_FE();

  jQuery('#graph1-teamwise-options-li-1 > label').click(function(){
	  
	jQuery('#fe-graph-metrics').css({"display":"block"});
	jQuery('#fe-graph-oppor').css({"display":"none"});	  
	jQuery('#fe-graph-sales').css({"display":"none"});	
	jQuery('.dropdown-wrap').css({"display":"none"});		
	metrics_chart_FE();  
  });
  
  jQuery('#graph1-teamwise-options-li-2 > label').click(function(){
	
	jQuery('#fe-graph-metrics').css({"display":"none"});	  
	jQuery('#fe-graph-oppor').css({"display":"block"});	  
	jQuery('#fe-graph-sales').css({"display":"none"});	
	jQuery('.dropdown-wrap').css({"display":"none"});			  
	opportunities_chart_FE();
  });
  
  jQuery('#graph1-teamwise-options-li-3 > label').click(function(){
	 
	jQuery('#fe-graph-metrics').css({"display":"none"});	  
	jQuery('#fe-graph-oppor').css({"display":"none"});	  
	jQuery('#fe-graph-sales').css({"display":"block"});		
	jQuery('.dropdown-wrap').css({"display":"none"});			
	sales_chart_FE();  
  });

});

	
	
});

////////////////////////////////////////////////////////////////////////////////////
	
////////////////////////////////////////////////////////////////////////////////////
// Admin Section Chart1 Opportunities charts 
////////////////////////////////////////////////////////////////////////////////////
jQuery('.be.nav-tabs li:nth-child(2)').on('shown.bs.tab', function (e) {
	
//chart metrics	
function metrics_chart_BE(){

			var lineChartData21 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [97, 108, 75, 50, 81, 58, 103, 58, 59, 65, 56, 66, 85] 
				}
			]

		}

	//window.onload = function(){
	var ctx21 = document.getElementById("canvas21").getContext("2d");
	window.myLine = new Chart(ctx21).Line(lineChartData21, {
		responsive: true,
		scaleShowGridLines : false,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		 pointDotStrokeWidth : 2,
		 datasetStroke : true,
		 bezierCurve: false,
		 animationEasing: "easeOutQuart",	
		 scaleFontSize: 14,
		 animationSteps: 40
		 
	});
}

// chart opportunities
function opportunities_chart_BE(){
		var lineChartData22 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [86, 99, 65, 45, 76, 55, 90, 39, 45, 60, 48, 54, 68] 
				}
			]
		}
		

	//window.onload = function(){
	var ctx22 = document.getElementById("canvas22").getContext("2d");
	window.myLine = new Chart(ctx22).Line(lineChartData22, {
		responsive: true,
		scaleShowGridLines : false,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		 pointDotStrokeWidth : 2,
		 datasetStroke : true,
		 bezierCurve: false,
		 animationEasing: "easeOutQuart",	
		 scaleFontSize: 14,
		 animationSteps: 40
		 
	});
	
	}

// chart sales
function sales_chart_BE(){
	var lineChartData23 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [11, 9, 10, 5, 5, 3, 13, 19, 14, 5, 8, 12, 17] 
				}
			]
		}


	//window.onload = function(){
	var ctx23 = document.getElementById("canvas23").getContext("2d");
	window.myLine = new Chart(ctx23).Line(lineChartData23, {
		responsive: true,
		scaleShowGridLines : false,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		 pointDotStrokeWidth : 2,
		 datasetStroke : true,
		 bezierCurve: false,
		 animationEasing: "easeOutQuart",	
		 scaleFontSize: 14,
		 animationSteps: 40
		 
	});
}

	
//Contest Trends - tabs - Backend
jQuery(document).ready(function(){

  jQuery('#graph1-options-li-1 > label').click(function(){
	jQuery('#be-graph-metrics').css({"display":"block"});
	jQuery('#be-graph-oppor').css({"display":"none"});	  
	jQuery('#be-graph-sales').css({"display":"none"});	
	jQuery('.dropdown-wrap').css({"display":"none"});		
    jQuery('.selected_contestants, #canvas2, #canvas3').hide(); // hiding all contestants graphs
	metrics_chart_BE();  
  });
  
  jQuery('#graph1-options-li-2 > label').click(function(){
	
	jQuery('#be-graph-metrics').css({"display":"none"});	  
	jQuery('#be-graph-oppor').css({"display":"block"});	  
	jQuery('#be-graph-sales').css({"display":"none"});	
	jQuery('.dropdown-wrap').css({"display":"none"});		
    jQuery('.selected_contestants, #canvas2, #canvas3').hide();  // hiding all contestants graphs	  
    opportunities_chart_BE();
  });
  
  jQuery('#graph1-options-li-3 > label').click(function(){
	 
	jQuery('#be-graph-metrics').css({"display":"none"});	  
	jQuery('#be-graph-oppor').css({"display":"none"});	  
	jQuery('#be-graph-sales').css({"display":"block"});	
	jQuery('.dropdown-wrap').css({"display":"none"});			
    jQuery('.selected_contestants, #canvas2, #canvas3').hide();  // hiding all contestants graphs	  	
	sales_chart_BE();  
  });
});	
	
});
////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////
// Opportunities charts in Popup
////////////////////////////////////////////////////////////////////////////////////
jQuery('#item_1_Modal').on('shown.bs.modal', function (e) {

//chart metrics	
function metrics_chart_InModal(){
			var lineChartData31 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [9, 12, 25, 18, 16, 5, 3, 15, 34, 20, 22, 4, 2] 
				}
			]

		}

	//window.onload = function(){
	var ctx31 = document.getElementById("canvas31").getContext("2d");
	window.myLine = new Chart(ctx31).Line(lineChartData31, {
		responsive: true,
		scaleShowGridLines : false,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		pointDotStrokeWidth : 2,
		datasetStroke : true,
		bezierCurve: false,
		animationEasing: "easeOutQuart",	
		scaleFontSize: 14,
		animationSteps: 40
	});
}

// chart opportunities
function opportunities_chart_InModal(){
		var lineChartData32 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [7, 12, 23, 16, 11, 4, 3, 12, 29, 18, 21, 3, 2] 
				}
			]

		}

	//window.onload = function(){
	var ctx32 = document.getElementById("canvas32").getContext("2d");
	window.myLine = new Chart(ctx32).Line(lineChartData32, {
		responsive: true,
		scaleShowGridLines : false,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		 pointDotStrokeWidth : 2,
		 datasetStroke : true,
		 bezierCurve: false,
		 animationEasing: "easeOutQuart",	
		 scaleFontSize: 14,
		 animationSteps: 40
	});
	
	}

// chart sales
function sales_chart_InModal(){
	var lineChartData33 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(238,245,248,1)",
					strokeColor : "rgba(62,154,203,1)",
					pointColor : "rgba(238,245,248,1)",
					pointStrokeColor : "rgba(62,154,203,1)",
					pointHighlightFill : "rgba(62,154,203,1)",
					pointHighlightStroke : "rgba(62,154,203,1)",	
 					data : [1, 0, 2, 2, 5, 1, 0, 3, 5, 2, 1, 1, 0] 
				}
			]

		}

	//window.onload = function(){
	var ctx33 = document.getElementById("canvas33").getContext("2d");
	window.myLine = new Chart(ctx33).Line(lineChartData33, {
		responsive: true,
		scaleShowGridLines : false,
		scaleLineColor: "rgba(255,255,255,.1)",
		pointDot : true,
		pointDotRadius : 4,
		 pointDotStrokeWidth : 2,
		 datasetStroke : true,
		 bezierCurve: false,
		 animationEasing: "easeOutQuart",	
		 scaleFontSize: 14,
		 animationSteps: 40,
		 
		 // Boolean - If we want to override with a hard coded scale
			scaleOverride: true,

			// ** Required if scaleOverride is true **
			// Number - The number of steps in a hard coded scale
			scaleSteps: 3,
			// Number - The value jump in the hard coded scale
			scaleStepWidth: 2,
			// Number - The scale starting value
			scaleStartValue: -1,
		 
	});
}

	
//Contest Trends - tabs - In modal
jQuery(document).ready(function(){
  metrics_chart_InModal();

  jQuery('#item_1_Modal #oppor-options-ul li:nth-child(1) label').click(function(){
	  
	jQuery('#modal-graph-metrics').css({"display":"block"});
	jQuery('#modal-graph-oppor').css({"display":"none"});	  
	jQuery('#modal-graph-sales').css({"display":"none"});	
	jQuery('.dropdown-wrap').css({"display":"none"});	
	metrics_chart_InModal();  
  });
  
  jQuery('#item_1_Modal #oppor-options-ul li:nth-child(2) label').click(function(){
	
	jQuery('#modal-graph-metrics').css({"display":"none"});	  
	jQuery('#modal-graph-oppor').css({"display":"block"});	  
	jQuery('#modal-graph-sales').css({"display":"none"});	 
	jQuery('.dropdown-wrap').css({"display":"none"});	 
	opportunities_chart_InModal();
  });
  
  jQuery('#item_1_Modal #oppor-options-ul li:nth-child(3) label').click(function(){
	 
	jQuery('#modal-graph-metrics').css({"display":"none"});	  
	jQuery('#modal-graph-oppor').css({"display":"none"});	  
	jQuery('#modal-graph-sales').css({"display":"block"});		
	jQuery('.dropdown-wrap').css({"display":"none"});	
	sales_chart_InModal();  
  });

});	
	

});
////////////////////////////////////////////////////////////////////////////////////



 
  function show_title(){ 
	   if(jQuery('.daterangepicker .calendar').is(':visible')){
			jQuery(".date-range-title").css({"display":"block"});
	   }
	   else{
		setTimeout('show_title();',100);
	   }
  }


jQuery(document).ready(function(){
	

var lastindex = '';
//custom date range picker
jQuery("#reportrange, .ranges li:nth-child(1)").click(function(){
	jQuery(".date-range-title").css({"display":"none"});
});
 
show_title(); 


  var cb = function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                    //jQuery('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                    //alert("Callback has fired: [" + start.format('MMMM D, YYYY') + " to " + end.format('MMMM D, YYYY') + ", label = " + label + "]");
                  }

                  var optionSet1 = {
                    startDate: moment().subtract(29, 'days'),
                    endDate: moment(),
                    minDate: '01/01/2012',
                    maxDate: '12/31/2014',
                    dateLimit: { days: 60 },
                    showDropdowns: true,
                    showWeekNumbers: true,
                    timePicker: false,
                    timePickerIncrement: 1,
                    timePicker12Hour: true,
                    ranges: {
                       //'Today': [moment(), moment()],
                       //'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                       //'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                       'Previous 30 Days': [moment().subtract(29, 'days'), moment()]
                       //'This Month': [moment().startOf('month'), moment().endOf('month')],
                       //'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    },
                    opens: 'left',
                   // buttonClasses: ['btn btn-default'],
                    applyClass: 'btn-small btn-primary btn-apply',
                    cancelClass: 'btn-small btn-cancel',
                    format: 'MM/DD/YYYY',
                    separator: ' to ',
                    locale: {
                        applyLabel: 'Apply',
                        cancelLabel: 'Cancel',
                        fromLabel: 'From',
                        toLabel: 'To',
                        customRangeLabel: 'Custom',
                        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        firstDay: 1
                    }
                  };

                  var optionSet2 = {
                    startDate: moment().subtract(7, 'days'),
                    endDate: moment(),
                    opens: 'left',
                    ranges: {
                       'Today': [moment(), moment()],
                       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                       'This Month': [moment().startOf('month'), moment().endOf('month')],
                       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    }
                  };

                  //jQuery('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

                  jQuery('#reportrange').daterangepicker(optionSet1, cb);

                  jQuery('#reportrange').on('show.daterangepicker', function() { console.log("show event fired"); });
                  jQuery('#reportrange').on('hide.daterangepicker', function() { console.log("hide event fired"); });
                  jQuery('#reportrange').on('apply.daterangepicker', function(ev, picker) { 
                    console.log("apply event fired, start/end dates are " 
                      + picker.startDate.format('MMMM D, YYYY') 
                      + " to " 
                      + picker.endDate.format('MMMM D, YYYY')
                    ); 
                  });
                  jQuery('#reportrange').on('cancel.daterangepicker', function(ev, picker) { console.log("cancel event fired"); });

                  jQuery('#options1').click(function() {
                    jQuery('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
                  });

                  jQuery('#options2').click(function() {
                    jQuery('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
                  });

                  jQuery('#destroy').click(function() {
                    jQuery('#reportrange').data('daterangepicker').remove();
                  });

//scrollbar
jQuery(".scroll-bar1").mCustomScrollbar({
	setHeight:260,
	theme:"dark-3"
});

jQuery(".scroll-bar2").mCustomScrollbar({
	setHeight:260,
	theme:"dark-3"
});

jQuery(".scroll-bar3").mCustomScrollbar({
	setHeight:413,
	theme:"dark-3"
});

jQuery(".scroll-bar4").mCustomScrollbar({
	setHeight:210,
	theme:"dark-3"
});

jQuery(".scroll-bar5").mCustomScrollbar({
	setHeight:180,
	theme:"dark-3"
});

jQuery(".scroll-bar6").mCustomScrollbar({
	setHeight:364,
	theme:"dark-3"
});

jQuery(".leaderboard-full-with-scroll").mCustomScrollbar({
	setHeight:405,
	theme:"dark-3"
});

jQuery(".team-scroll").mCustomScrollbar({
	setHeight:390,
	theme:"dark-3"
});

jQuery(".scroll-bar470").mCustomScrollbar({
	setHeight:462,
	theme:"dark-3"
});



// Team_Leaderboard_Admin - expanding expand table of team members
jQuery(".show-team-button").click(function(e){
 e.preventDefault();	
 if(jQuery(this).find('i.fa').hasClass('fa-plus-circle')){
  jQuery('.team-list .expand').hide();
  jQuery('.team-list').find('i.fa').removeClass('fa-minus-circle').addClass('fa-plus-circle');	
  jQuery(this).parent().parent().next().show();	 
  jQuery(this).parent().parent().find('i.fa').removeClass('fa-plus-circle').addClass('fa-minus-circle');	 
 }
 else
 {
  jQuery('.team-list .expand').hide();
  jQuery('.team-list').find('i.fa').removeClass('fa-minus-circle').addClass('fa-plus-circle');	
 }
});






// opening level3 table in Trend page 
jQuery(".level2 a.button").click(function(){
 if(jQuery(this).find('i.fa').hasClass('fa-plus-circle'))
  jQuery(this).find('i.fa').removeClass('fa-plus-circle').addClass('fa-minus-circle');	
 else if(jQuery(this).find('i.fa').hasClass('fa-minus-circle'))
  jQuery(this).find('i.fa').removeClass('fa-minus-circle').addClass('fa-plus-circle');	
 
 jQuery(this).parent().next('.level3').toggle();	 
});

//search
jQuery(".search-button").click(function(){
	jQuery(".search-input").animate({});	
});

function first_animation_move_right(that) {
	jQuery(that).addClass('search-back');
	jQuery(that).removeClass('search-icon');
        jQuery(that).prev('.search-input').clearQueue().stop()
            .animate(
                {right: 0 }, {
                    duration: 'slow',
                    easing: 'easeInOutBack'
                });
				}

function second_animation_move_left(that) {
	jQuery(that).addClass('search-icon');
	jQuery(that).removeClass('search-back');

         jQuery(that).prev('.search-input').clearQueue().stop()
            .animate(
                {right: '-300px' }, {
                    duration: 'slow',
                    easing: 'easeInOutBack'
                });  
}


jQuery('#search_box_animation_2, #search_box_animation_1').click(function(event) {
	event.preventDefault();
    jQuery(this).prev().toggle();
/*
	if(jQuery(this).hasClass('search-back')){
		second_animation_move_left(this);
	}else if(jQuery(this).hasClass('search-icon')){
		first_animation_move_right(this);
	}
*/	
  });


//box hover effect
jQuery(".box-body").hover(function(){
	jQuery(this).find('.box-overlay1').fadeIn('fast');
}, function(){
	jQuery(this).find('.box-overlay1').fadeOut('fast');
	});


//input[type="text"] remove value on focus
/*
	jQuery('input[type="text"], input[type="email"], input[type="tel"]').each(function(){    
	var default_value = jQuery(this).val();        
	jQuery(this).focus(function() {
		if(jQuery(this).val() == default_value)
		{
			 jQuery(this).val("");
		}
	}).blur(function(){
		if(jQuery(this).val().length == 0) 
		{
			jQuery(this).val(default_value);
		}
	});
});
*/

/*--custom Dropdown--*/
jQuery('input').iCheck({
  checkboxClass: 'icheckbox_minimal-blue',
  radioClass: 'iradio_minimal-blue',
  increaseArea: '20%' // optional
}); 

/*--custom checkbox frontend--*/
jQuery('.form-checkbox input').iCheck({
  checkboxClass: 'icheckbox_minimal-blue',
  radioClass: 'iradio_minimal-blue',
  increaseArea: '20%' // optional
}); 

/*managing All Contestants dropdown in Timeline section*/
jQuery('html').click(function(){
 jQuery('.dropdown-wrap').hide();
});
jQuery('.dropdowns').click(function(e){
   e.stopPropagation();
});
jQuery('.heading-ul').click(function(){
 jQuery('.dropdown-wrap').fadeOut();
 
 if(jQuery(this).next('.dropdown-wrap').is(":visible")){
	 jQuery(this).next('.dropdown-wrap').fadeOut();
	 }else{
		 jQuery(this).next('.dropdown-wrap').fadeIn();
		 }
// jQuery(this).next('.dropdown-wrap').fadeToggle();
 
 
});


/*opportunities dropdown - graph1*/
jQuery('#graph1-options-ul li:nth-child(1) label').click(function(){
  jQuery('#graph1-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.graph1 .opportunities-dropdown .heading-ul li').css('display','none');	  
  jQuery('.graph1 .opportunities-dropdown .heading-ul li:nth-child(1)').css('display','block');
})
jQuery('#graph1-options-ul li:nth-child(2) label').click(function(){
  jQuery('#graph1-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.graph1 .opportunities-dropdown .heading-ul li').css('display','none');	  
  jQuery('.graph1 .opportunities-dropdown .heading-ul li:nth-child(2)').css('display','block');	    
})
jQuery('#graph1-options-ul li:nth-child(3) label').click(function(){
  jQuery('#graph1-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.graph1 .opportunities-dropdown .heading-ul li').css('display','none');	  
  jQuery('.graph1 .opportunities-dropdown .heading-ul li:nth-child(3)').css('display','block');	    
})

/*Teamwise dropdown - graph1*/
jQuery('#graph1-teamwise-options-ul li:nth-child(1) label').click(function(){
  jQuery('#graph1-teamwise-teamwise-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.graph1 .teamwise-dropdown .heading-ul li').css('display','none');	  
  jQuery('.graph1 .teamwise-dropdown .heading-ul li:nth-child(1)').css('display','block');
})
jQuery('#graph1-teamwise-options-ul li:nth-child(2) label').click(function(){
  jQuery('#graph1-teamwise-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.graph1 .teamwise-dropdown .heading-ul li').css('display','none');	  
  jQuery('.graph1 .teamwise-dropdown .heading-ul li:nth-child(2)').css('display','block');	    
})
jQuery('#graph1-teamwise-options-ul li:nth-child(3) label').click(function(){
  jQuery('#graph1-teamwise-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.graph1 .teamwise-dropdown .heading-ul li').css('display','none');	  
  jQuery('.graph1 .teamwise-dropdown .heading-ul li:nth-child(3)').css('display','block');	    
})

/*rank dropdown*/
jQuery('#rank-options-ul li:nth-child(1) label').click(function(){
  jQuery('#rank-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.rank-dropdown .heading-ul li').css('display','none');	  
  jQuery('.rank-dropdown .heading-ul li:nth-child(1)').css('display','block');
  jQuery('.dropdown-wrap').hide();  
})
jQuery('#rank-options-ul li:nth-child(2) label').click(function(){
  jQuery('#rank-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.rank-dropdown .heading-ul li').css('display','none');	  
  jQuery('.rank-dropdown .heading-ul li:nth-child(2)').css('display','block');	    
  jQuery('.dropdown-wrap').hide();    
})


/*All contentstants - graph1*/
jQuery('ul#graph1-individual-contestants-ul li label').each(function(){
	  jQuery('ul#graph1-all-contestants-ul li label div').removeClass('checked');
	  jQuery('ul#graph1-individual-contestants-ul li label').find('div').removeClass('checked');
	
});	

var checkttotalcount = 0;	
//jQuery('ul#graph1-individual-contestants-ul li label').each(function(){
 jQuery('ul#graph1-individual-contestants-ul li label').click(function(event){
	 
  
  jQuery('ul#graph1-all-contestants-ul li label div').removeClass('checked');
	 var n = jQuery("ul#graph1-individual-contestants-ul li label div.checked").length;
	// alert(n);
	  if(n < 4){
		  if ( jQuery(this).find('div').hasClass( "checked" ) ) {
			  jQuery(this).find('div').addClass('checked');

		  }else{
			  jQuery(this).find('div').removeClass('checked');  
		  }
	  jQuery('.graph1 .heading-ul #graph1-label01').hide();  
	  jQuery('.graph1 .heading-ul #graph1-label02').show();    
	
	  }else{
		jQuery(this).find('div').removeClass('checked');  
		//alert('You\'re not allowed to choose more than 3 boxes');
	  }
  });
//});



jQuery('ul#graph1-all-contestants-ul li label').click(function(){
	
		//**************Hide Sales Graph**********
	jQuery('#be-graph-metrics').css({"display":"none"});	  
	jQuery('#be-graph-oppor').css({"display":"none"});	  
	jQuery('#be-graph-sales').css({"display":"none"});			
	//jQuery('#canvas21, #canvas22, #canvas23').hide();  // hiding all contestants graphs	
	//*********************************************	 
	
/*jQuery('ul#graph1-individual-contestants-ul li label').each(function(){
	  jQuery('ul#graph1-all-contestants-ul li label div').removeClass('checked');
	  jQuery('ul#graph1-individual-contestants-ul li label').find('div').removeClass('checked');
	
});*/

jQuery('.selected_contestants').show(); //show titles

	//**************Hide Sales Graph**********
	//jQuery('#be-graph-metrics').css({"display":"none"});	  
	//jQuery('#be-graph-oppor').css({"display":"none"});	  
	//jQuery('#be-graph-sales').css({"display":"none"});			
	//jQuery('#canvas21, #canvas22, #canvas23').hide();  // 	
	//*********************************************	 


  jQuery('ul#graph1-all-contestants-ul li label div').removeClass('checked');
  jQuery(this).find('div').toggleClass('checked');
  jQuery('.graph1 .heading-ul #graph1-label02').hide();  
  jQuery('.graph1 .heading-ul #graph1-label01').show();   
  
  jQuery('#selected_individual_contestants').hide();     
  jQuery('#selected_all_contestants').show();   
  jQuery('#canvas2').show();      
  jQuery('#canvas3').hide();      
       
})

/*opportunities dropdown - graph2*/
jQuery('#graph2-options-ul li:nth-child(1) label').click(function(){
  jQuery('#graph2-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.graph2 .opportunities-dropdown .heading-ul li').css('display','none');	  
  jQuery('.graph2 .opportunities-dropdown .heading-ul li:nth-child(1)').css('display','block');	    
})
jQuery('#graph2-options-ul li:nth-child(2) label').click(function(){
  jQuery('#graph2-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.graph2 .opportunities-dropdown .heading-ul li').css('display','none');	  
  jQuery('.graph2 .opportunities-dropdown .heading-ul li:nth-child(2)').css('display','block');	    
})
jQuery('#graph2-options-ul li:nth-child(3) label').click(function(){
  jQuery('#graph2-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.graph2 .opportunities-dropdown .heading-ul li').css('display','none');	  
  jQuery('.graph2 .opportunities-dropdown .heading-ul li:nth-child(3)').css('display','block');	    
})

/*timeline dropdown*/
jQuery('ul#timeline-individual-contestants-ul li label').each(function(){
 jQuery('ul#timeline-individual-contestants-ul li label').click(function(){
  jQuery('ul#timeline-all-contestants-ul li label div').removeClass('checked');
  jQuery(this).find('div').toggleClass('checked');
  jQuery('.timeline .heading-ul #timeline-label01').hide();  
  jQuery('.timeline .heading-ul #timeline-label02').show();    
	});
});
jQuery('ul#timeline-all-contestants-ul li label').click(function(){
  jQuery('ul#timeline-individual-contestants-ul li label div').removeClass('checked');
  jQuery(this).find('div').toggleClass('checked');
  jQuery('.timeline .heading-ul #timeline-label02').hide();  
  jQuery('.timeline .heading-ul #timeline-label01').show();   
})

/*opportunities dropdown in popups*/
jQuery('.modal-body-data #oppor-options-ul li:nth-child(1) label').click(function(){
  jQuery('.modal-body-data #oppor-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.modal-body-data .opportunities-dropdown .heading-ul li').css('display','none');	  
  jQuery('.modal-body-data .opportunities-dropdown .heading-ul li:nth-child(1)').css('display','block');	    
})
jQuery('.modal-body-data #oppor-options-ul li:nth-child(2) label').click(function(){
  jQuery('.modal-body-data #oppor-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.modal-body-data .opportunities-dropdown .heading-ul li').css('display','none');	  
  jQuery('.modal-body-data .opportunities-dropdown .heading-ul li:nth-child(2)').css('display','block');	    
})
jQuery('.modal-body-data #oppor-options-ul li:nth-child(3) label').click(function(){
  jQuery('.modal-body-data #oppor-options-ul li label div').removeClass('checked');	
  jQuery(this).find('div').addClass('checked');	
  jQuery('.modal-body-data .opportunities-dropdown .heading-ul li').css('display','none');	  
  jQuery('.modal-body-data .opportunities-dropdown .heading-ul li:nth-child(3)').css('display','block');	    
})




//table rolllover effect
jQuery(".table-full .table-body tr").hover(function(){
	jQuery(this).css({"background":"#f4f4f4"});
	}, function(){
		jQuery(this).css({"background":"none"});
		});


// centering popup/modal vertically
adjustModalMaxHeightAndPosition();

});

// centering popup/modal vertically
 function adjustModalMaxHeightAndPosition(){
  jQuery('.modal').each(function(){
    if(jQuery(this).hasClass('in') == false){
      jQuery(this).show();
    };
    var contentHeight = jQuery(window).height() - 60;
    var headerHeight = jQuery(this).find('.modal-header').outerHeight() || 2;
    var footerHeight = jQuery(this).find('.modal-footer').outerHeight() || 2;

    jQuery(this).find('.modal-content').css({
      'max-height': function () {
        return contentHeight;
      }
    });

    jQuery(this).find('.modal-body').css({
      'max-height': function () {
        return (contentHeight - (headerHeight + footerHeight));
      }
    });

    jQuery(this).find('.modal-dialog').css({
      'margin-top': function () {
        return -(jQuery(this).outerHeight() / 2);
      },
      'margin-left': function () {
        return -(jQuery(this).outerWidth() / 2);
      }
    });
    if(jQuery(this).hasClass('in') == false){
      jQuery(this).hide();
    };
  });
};

jQuery(window).resize(adjustModalMaxHeightAndPosition).trigger("resize");
// centering popup/modal vertically ends

function showSelectedGraph(){
	
	jQuery.ajaxSetup({cache: false});
	
	//**************Hide Sales Graph**********
	jQuery('#be-graph-metrics').css({"display":"none"});	  
	jQuery('#be-graph-oppor').css({"display":"none"});	  
	jQuery('#be-graph-sales').css({"display":"none"});			
	//jQuery('#canvas21, #canvas22, #canvas23').hide();  // hiding all contestants graphs	
	//*********************************************	 
		
	  jQuery('.selected_contestants').show(); 
	  jQuery('#selected_all_contestants').hide();      
	  jQuery('#selected_individual_contestants').show();      
	  
	  jQuery('#canvas2').hide();      
	  jQuery('#canvas3').show(); 
	  	var lineChartData2 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				
				{
					label: "My Second dataset",
					fillColor : "rgba(70,158,205,0.2)",
					strokeColor : "rgba(70,158,205,1)",
					pointColor : "rgba(70,158,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(70,158,205,1)",
 					data : [104, 55, 57, 45, 105, 100, 74, 66, 59, 74, 42, 78, 110] 
				},
			]

		}		
	
	var lineChartData3 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				
				{
					label: "My Second dataset",
					fillColor : "rgba(70,158,205,0.2)",
					strokeColor : "rgba(70,158,205,1)",
					pointColor : "rgba(70,158,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(70,158,205,1)",
 					data : [104, 55, 57, 45, 105, 100, 74, 66, 59, 74, 42, 78, 110] 
				},
				{
					label: "My Third dataset",
					fillColor : "rgba(233,135,69,0.2)",
					strokeColor : "rgba(233,135,69,1)",
					pointColor : "rgba(233,135,69,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(233,135,69,1)",
 					data : [97, 108, 75, 50, 81, 58, 103, 58, 59, 65, 56, 66, 85] 
				}
			]

		}		
	var lineChartData4 = {
			labels : ["21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug",  "29 Aug",  "30 Aug", "31 Aug", "1 Sep", "2 Sep"],
			datasets : [
				
				{
					label: "My Second dataset",
					fillColor : "rgba(70,158,205,0.2)",
					strokeColor : "rgba(70,158,205,1)",
					pointColor : "rgba(70,158,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(70,158,205,1)",
 					data : [104, 55, 57, 45, 105, 100, 74, 66, 59, 74, 42, 78, 110] 
				},
				{
					label: "My Third dataset",
					fillColor : "rgba(233,135,69,0.2)",
					strokeColor : "rgba(233,135,69,1)",
					pointColor : "rgba(233,135,69,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(233,135,69,1)",
 					data : [97, 108, 75, 50, 81, 58, 103, 58, 59, 65, 56, 66, 85] 
				},
				{
					label: "My Fourth dataset",
					fillColor : "rgba(72,169,86,0.2)",
					strokeColor : "rgba(72,169,86,1)",
					pointColor : "rgba(72,169,86,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(72,169,86,1)",
 					data : [150, 145, 125, 75, 120, 110, 75, 65, 45, 42, 90, 52, 100] 
				}
			]

		}			
	
	var checkboxes = document.getElementsByName('contestant[]');
	//var checkboxes = jQuery("#graph1-individual-contestants-ul, #graph1-all-contestants-ul").find('input').attr('name','contestant[]');
		var vals = "";
		for (var i=0, n=checkboxes.length;i<n;i++) {
		  if (checkboxes[i].checked) 
		  {
		  vals += ","+checkboxes[i].value;
		  }
		}
		if (vals) vals = vals.substring(1);

	//alert(vals);
	var conte_array = vals.split(",");
	if(conte_array.length == 1){
		var litext = "<li><span class='color1'></span>"+conte_array[0]+"</li>";
		
		jQuery('ul#selected_individual_contestants').html(litext);
		
		if(document.getElementById("canvas3")!= null){
			var ctx3 = document.getElementById("canvas3").getContext("2d");
			window.myLine = new Chart(ctx3).Line(lineChartData2, {
				responsive: true,
				scaleShowGridLines : false,
				showScale: true,
				scaleLineColor: "rgba(255,255,255,.1)",
				pointDot : true,
				pointDotRadius : 6,
				 pointDotStrokeWidth : 2,
				 datasetStroke : true,
				 bezierCurve: false,
				 animationEasing: "easeOutQuart",	
				 scaleFontSize: 14,
				 animationSteps: 40,
				
				 
			});
		}
	}
	if(conte_array.length == 2){
		var litext = "<li><span class='color1'></span>"+conte_array[0]+"</li><li><span class='color2'></span>"+conte_array[1]+"</li> ";
		
		jQuery('ul#selected_individual_contestants').html(litext);
		
		if(document.getElementById("canvas3")!= null){
			var ctx3 = document.getElementById("canvas3").getContext("2d");
			window.myLine = new Chart(ctx3).Line(lineChartData3, {
				responsive: true,
				scaleShowGridLines : false,
				showScale: true,
				scaleLineColor: "rgba(255,255,255,.1)",
				pointDot : true,
				pointDotRadius : 6,
				 pointDotStrokeWidth : 2,
				 datasetStroke : true,
				 bezierCurve: false,
				 animationEasing: "easeOutQuart",	
				 scaleFontSize: 14,
				 animationSteps: 40,
				
				 
			});
		}
	}
	if(conte_array.length == 3){
		if(document.getElementById("canvas3")!= null){
			
		var litext = "<li><span class='color1'></span>"+conte_array[0]+"</li><li><span class='color2'></span>"+conte_array[1]+"</li><li><span class='color3'></span>"+conte_array[2]+"</li> ";
		
		jQuery('ul#selected_individual_contestants').html(litext);
			
			var ctx3 = document.getElementById("canvas3").getContext("2d");
			window.myLine = new Chart(ctx3).Line(lineChartData4, {
				responsive: true,
				scaleShowGridLines : false,
				showScale: true,
				scaleLineColor: "rgba(255,255,255,.1)",
				pointDot : true,
				pointDotRadius : 6,
				 pointDotStrokeWidth : 2,
				 datasetStroke : true,
				 bezierCurve: false,
				 animationEasing: "easeOutQuart",	
				 scaleFontSize: 14,
				 animationSteps: 40,
				
				 
			});
		}
	}
	

}



jQuery(document).ready(function(){
  
// showing little cross button on keypress and hiding that on closing little cross in search input boxes  
  jQuery('.search-input input.form-control').on("input", function() {
	  var dInput = jQuery(this).val().length;
	  if(dInput > 0) {
	   jQuery(this).parent().find('.clear-input').css('display','block');  	
	  }
	  else
	  {
	   jQuery(this).parent().find('.clear-input').css('display','none');  			 
	  }
  });  
  	
  jQuery('.search-input .clear-input').click(function(){
	  jQuery(this).parent().find('input.form-control').val(''); 
	  jQuery(this).css('display','none'); 	  
   })
   

// jumping directly to a tab on some page
   var hash = window.location.hash;

   if (hash != "")
       jQuery('#header-tabs a[href="' + hash + '"]').tab('show');
   else
       jQuery('#header-tabs a:first').tab('show');
	   
//   jQuery("html, body").animate({ scrollTop: 0 });
   
   
/*showing select when clicking on checkbox*/   
jQuery('.radio-everyone *').click(function(){
  jQuery('.select-role').hide();
  jQuery('.select-individuals').hide();
  jQuery('.select-contest').hide();
});
jQuery('.radio-role *').click(function(){
  jQuery('.select-role').show();
  jQuery('.select-role option:first-child').prop("selected", "selected");
  jQuery('.select-individuals').hide();
  jQuery('.select-contest').hide();
});
jQuery('.radio-individuals *').click(function(){
  jQuery('.select-role').hide();
  jQuery('.select-individuals').show();
  jQuery('.select-individuals option:first-child').prop("selected", "selected");  
  jQuery('.select-contest').hide();
});
jQuery('.radio-contest *').click(function(){
  jQuery('.select-role').hide();
  jQuery('.select-individuals').hide();
  jQuery('.select-contest').show();
  jQuery('.select-contest option:first-child').prop("selected", "selected");  
});
jQuery('.checkbox-crm *').click(function(){
  jQuery('.select-crm').fadeToggle();
  jQuery('.salesforce-input').hide();
});
jQuery('.select-crm').click(function(){
  if(jQuery('.select-crm option:selected').text() == 'Salesforce'){
	  jQuery('.salesforce-input').show();
  }	
  else
  {
      jQuery('.salesforce-input').hide();
  }
}); 
 
jQuery('.clear-error-input').click(function(){
  jQuery(this).parent().find('input[type=email], input[type=text], textarea').val('');	 
  jQuery(this).parent().find('.error-msg').hide();	     
  jQuery(this).parent().parent().removeClass('error');	   
});
 
 
/*showing pop-hover*/
jQuery('.backend-forms .right-col table tr td.actions').click(function(){
  jQuery('.pop-hover').css('display','none');
  jQuery(this).find('.pop-hover').toggle();
});
jQuery('body').click(function() {
   jQuery('.pop-hover').hide();
});
jQuery('.backend-forms .right-col table tr td.actions').click(function(event){
   event.stopPropagation();
}); 
 
 


/*making the row highlighted on PF_Add_Group_Admin.html*/
jQuery('.add-users-table div.form-checkbox label').click(function(){
	 jQuery(this).parent().parent().parent().toggleClass('selected');
	});
jQuery('.add-users-table div.form-checkbox ins').click(function(){
	 jQuery(this).parent().parent().parent().parent().parent().toggleClass('selected');
	});

   
});






