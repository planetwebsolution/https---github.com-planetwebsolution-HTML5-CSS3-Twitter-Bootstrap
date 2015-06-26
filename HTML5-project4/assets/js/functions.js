var jQuery = jQuery.noConflict();


/*==========================
		add metric
==========================*/
function addMetric(){
jQuery(".data-type select").each(function(){		
	var dataType = jQuery(this).val();
	 if(dataType=='Dollar Value ($)'){
	  jQuery(this).parent().parent().parent().next().find(".dollar-vaule").css({"display":"block"});
	  jQuery(this).parent().parent().parent().next().find(".ratio-integer").css({"display":"none"});
	 }else if(dataType=='Activity'){
	  jQuery(this).parent().parent().parent().next().find(".dollar-vaule").css({"display":"none"});
	  jQuery(this).parent().parent().parent().next().find(".ratio-integer").css({"display":"block"});
	}
});


jQuery(".has-info").each(function(){
	jQuery(this).hover(function(){
		jQuery(this).next().fadeIn();
	}, function(){
		jQuery(this).next().fadeOut();
		});
});

}


/*==========================
		drag & drop
==========================*/
function dragDropCustomPlayer(){
	jQuery( "#players-list li" ).draggable( "destroy" );
	jQuery(".drag-area").droppable( "destroy" );
	// jQuery UI Draggable
	jQuery("#players-list li").draggable({		
		// brings the item back to its place when dragging is over
		cursorAt: { left: 0, top: -jQuery("body").scrollTop() },
		refreshPositions: true,
		revert:false,		
		containment: "body",
		scroll: true,
		start: function(event, ui) { 
		  jQuery(this).draggable("option", "cursorAt", {
			left: 0,
			top: -jQuery("body").scrollTop()
		  }); 
		},
		
		// once the dragging starts, we decrease the opactiy of other items
		// Appending a class as we do that with CSS
		drag:function () {
			jQuery(this).addClass("active");
			jQuery(this).closest("#players-list").addClass("active");
			jQuery(".mCustomScrollBox").css({"overflow":"visible"});
			jQuery(".mCSB_container").css({"overflow":"visible"});},
	
		// removing the CSS classes once dragging is over.
		stop:function () {
			//jQuery(this).removeClass("active").closest("#players-list").removeClass("active");
			jQuery(this).css({'left':'0px','top':'0px'});
			jQuery(".mCustomScrollBox").css({"overflow":"hidden"});
			jQuery(".mCSB_container").css({"overflow":"hidden"});
				if(jQuery('.drag-area ul li[data-id='+jQuery(this).attr('data-id')+']').length >0){
				jQuery(this).draggable("disable").stop().animate({opacity:.25},600);
			}
		}
	});	
	
	// jQuery Ui Droppable
	jQuery(".drag-area").droppable({
	
		// The class that will be appended to the to-be-dropped-element 
		activeClass:"active",		
		// The class that will be appended once we are hovering the to-be-dropped-element 
		hoverClass:"hover",		
		// The acceptance of the item once it touches the to-be-dropped-element 
		// For different values http://api.jqueryui.com/droppable/#option-tolerance
		tolerance:"touch",
		drop:function (event, ui) {		
			var basket = jQuery(this),
					move = ui.draggable,
					itemId = basket.find("ul li[data-id='" + move.attr("data-id")	 + "']");
	
			// To increase the value by +1 if the same item is already in the drag area
			if (itemId.html() != null) {
				//itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
				//parseInt(itemId.addClass("sdfg"));
				 
			}
			else {
				// Add the dragged item to drag area
				addBasket(basket, move);
	
			}
		}
	});	
}

// This function runs once an item is added to the drag area
function addBasket(basket, move) {
	basket.find("ul").append('<li data-id="' + move.attr("data-id") + '">'
			+'<div class="player-info">'
			+ '<div class="player-pic">' + move.find(".player-pic").html() + '</div>'
			+ '<div class="player-name">' + move.find(".player-name").html() + '</div>'
			//+ '<input class="count" value="1" type="text">'
			+ '<button class="delete">&#10005;</button>'
			+'</div>');
}

/*=================== info tooltip ==============*/
function infoTip(){
jQuery('.info-tip').tooltipsy({
		className: 'infotip-wrap',
		offset: [9, .1],
		css: {
			'padding': '16px',
			'max-width': '290px',
			'color': '#323a45',
			'background-color': '#fff',
			'border': '1px solid #fff',
			'-moz-box-shadow': '0 0 6px rgba(0, 0, 0, .3)',
			'-webkit-box-shadow': '0 0 6px rgba(0, 0, 0, .3)',
			'box-shadow': '0 0 6px rgba(0, 0, 0, .3)',
			'text-shadow': 'none',
			'border-radius':'4px'
		}
});
	
}

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

jQuery(".scroll-feeds").mCustomScrollbar({
	setHeight:725,
	theme:"dark-3"
});

jQuery(".scroll-revals").mCustomScrollbar({
	setHeight:304,
	theme:"dark-3"
});

jQuery(".scroll-post").mCustomScrollbar({
	setHeight:304,
	theme:"dark-3"
});

jQuery(".scroll-history").mCustomScrollbar({
	setHeight:466,
	theme:"dark-3"
});

jQuery(".achivementLogo-scrollbar").mCustomScrollbar({
	setHeight:230,
	theme:"dark-3"
});

jQuery(".rivals-scrollbar").mCustomScrollbar({
	setHeight:196,
	theme:"dark-3"
});

jQuery(".boards-scrollbar").mCustomScrollbar({
	setHeight:196,
	theme:"dark-3"
});

jQuery(".scroll-pane").mCustomScrollbar({
	setHeight:344,
	theme:"dark-3"
});

jQuery(".scrollpane-players-list").mCustomScrollbar({
	setHeight:440,
	theme:"dark-3"
});

//custom scrollbar for textarea
 
var textArea=jQuery(".body-copy textarea");
	textArea.wrap("<div class='textarea-wrapper' />");
	var textAreaWrapper=textArea.parent(".textarea-wrapper");
	textAreaWrapper.mCustomScrollbar({
		scrollInertia:0,
		theme:"dark-3",
		autoScrollOnFocus: true
  	 
	});
	var hiddenDiv=jQuery(document.createElement("div")),
		content=null;
	hiddenDiv.addClass("hiddendiv");
	jQuery("body").prepend(hiddenDiv);
	textArea.bind("keyup",function(e){
		content=jQuery(this).val();
		var clength=content.length;
		var cursorPosition=textArea.getCursorPosition();
		content="<span>"+content.substr(0,cursorPosition)+"</span>"+content.substr(cursorPosition,content.length);
		content=content.replace(/\n/g,"<br />");
		hiddenDiv.html(content+"<br />");
		jQuery(this).css("height",hiddenDiv.height());
		textAreaWrapper.mCustomScrollbar("update");
		var hiddenDivSpan=hiddenDiv.children("span"),
			hiddenDivSpanOffset=0,
			viewLimitBottom=(parseInt(hiddenDiv.css("min-height")))-hiddenDivSpanOffset,
			viewLimitTop=hiddenDivSpanOffset,
			viewRatio=Math.round(hiddenDivSpan.height()+textAreaWrapper.find(".mCSB_container").position().top);
		if(viewRatio>viewLimitBottom || viewRatio<viewLimitTop){
			if((hiddenDivSpan.height()-hiddenDivSpanOffset)>0){
				textAreaWrapper.mCustomScrollbar("scrollTo",hiddenDivSpan.height()-hiddenDivSpanOffset);
			}else{
				textAreaWrapper.mCustomScrollbar("scrollTo","top");
			}
		}
	});
	jQuery.fn.getCursorPosition=function(){
		var el=jQuery(this).get(0),
			pos=0;
		if("selectionStart" in el){
			pos=el.selectionStart;
		}else if("selection" in document){
			el.focus();
			var sel=document.selection.createRange(),
				selLength=document.selection.createRange().text.length;
			sel.moveStart("character",-el.value.length);
			pos=sel.text.length-selLength;
		}
		return pos;
}

 



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
 
	jQuery('.search-col input[type="text"]').each(function(){    
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

/*--custom checkbox frontend--*/
jQuery('.form-checkbox2 input').iCheck({
  checkboxClass: 'icheckbox_minimal-blue',
  radioClass: 'iradio_minimal-blue',
  increaseArea: '20%' // optional
});

jQuery('.form-checkbox2 input').on('ifClicked', function(event){
  jQuery('.form-checkbox2 input').iCheck('uncheck');
  jQuery(this).iCheck('check');
  
  if(jQuery(".game-box label").length >0 ){
  	jQuery(".game-box label").each(function(){
		if(jQuery(this).find('.icheckbox_minimal-blue').hasClass('checked')){
			//jQuery(".game-box").removeClass('selected');
			jQuery(this).parent().addClass('selected');
			jQuery('.user-img-small img').attr('src',jQuery(this).find('.game-img img').attr('src'));
			//console.log("yes");
		}else{
			//jQuery(".game-box").removeClass('selected');
			jQuery(this).parent().removeClass('selected');
			//console.log("no");
		}
	});
  }
  
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








/*==================================================
     			custom  - select menu
===================================================*/
/*jQuery('.custom-select').Selectyze({
	theme : 'grey'
});*/


/*==================================================
     Keep Score: input value in monetary format
===================================================*/

/*jQuery('.metric-ratio input').priceFormat({
    prefix: '$ ',
    centsSeparator: '',
    thousandsSeparator: '',
	centsLimit: 1.00
});*/

/*jQuery('.metric-total input').priceFormat({
    suffix: ' point(s)',
	prefix: '',
    centsSeparator: '',
    thousandsSeparator: '',
	centsLimit: 0
});*/

/*==========================
		drag & drop
==========================*/

// drag drop function
// jQuery UI Draggable
jQuery("#players-list li").draggable({		
	// brings the item back to its place when dragging is over
	cursorAt: { left: 0, top: -jQuery("body").scrollTop() },
	refreshPositions: true,
	revert:false,
 	containment: "body",
	scroll: true,
	start: function(event, ui) { 
	  jQuery(this).draggable("option", "cursorAt", {
		left: 0,
		top: -jQuery("body").scrollTop()
	  }); 
	},
	
	// once the dragging starts, we decrease the opactiy of other items
	// Appending a class as we do that with CSS
	drag:function () {
		jQuery(this).addClass("active");
		jQuery(this).closest("#players-list").addClass("active");
		jQuery(".mCustomScrollBox").css({"overflow":"visible"});
		jQuery(".mCSB_container").css({"overflow":"visible"});
		
	},

	// removing the CSS classes once dragging is over.
	stop:function () {
		//jQuery(this).removeClass("active").closest("#players-list").removeClass("active");
		jQuery(this).css({'left':'0px','top':'0px'});
		jQuery(".mCustomScrollBox").css({"overflow":"hidden"});
		jQuery(".mCSB_container").css({"overflow":"hidden"});

		if(jQuery('.drag-area ul li[data-id='+jQuery(this).attr('data-id')+']').length >0){
			jQuery(this).draggable("disable").stop().animate({opacity:.25},600);
		}
		
		 jQuery(".delete").hover(function(){
				jQuery(this).prev().prev().find('img').stop().animate({opacity:.6});
			}, function(){
				jQuery(this).prev().prev().find('img').stop().animate({opacity:1});
		});

		
	}
});	

// jQuery Ui Droppable
jQuery(".drag-area").droppable({

	// The class that will be appended to the to-be-dropped-element 
	activeClass:"active",		
	// The class that will be appended once we are hovering the to-be-dropped-element 
	hoverClass:"hover",		
	// The acceptance of the item once it touches the to-be-dropped-element 
	// For different values http://api.jqueryui.com/droppable/#option-tolerance
	tolerance:"touch",
	drop:function (event, ui) {		
		var basket = jQuery(this),
				move = ui.draggable,
				itemId = basket.find("ul li[data-id='" + move.attr("data-id")	 + "']");

		// To increase the value by +1 if the same item is already in the drag area
		if (itemId.html() != null) {
			//itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
			//parseInt(itemId.addClass("sdfg"));
		}
		else {
			// Add the dragged item to drag area
			addBasket(basket, move);

		}
	}
});
	

jQuery(window).scroll(function(){
	dragDropCustomPlayer();
}); 



// The function that is triggered once delete button is pressed
jQuery(".drag-area ul li button.delete").live("click", function () {
	jQuery(this).closest("li").remove();
	jQuery(this).closest("li").attr('data-id');
	jQuery('#players-list li[data-id='+jQuery(this).closest("li").attr('data-id')+']').removeClass('active').stop().animate({opacity:1},500);
	jQuery('#players-list li[data-id='+jQuery(this).closest("li").attr('data-id')+']').draggable( "enable" );
});


// check if drag area has li
setInterval(function(){
	if(jQuery(".drag-area ul").find("li").length <1){
		jQuery(".drag-area ul").addClass("drag-bg");		 
	}else{
		jQuery(".drag-area ul").removeClass("drag-bg");		 
	}
}, 100);



jQuery('.custom-select').Selectyze({
		theme : 'grey'
});

/*-- add prefix --*/

jQuery('.dollar-vaule input').each(function() {
	jQuery(this).on('blur', function() {
		var amount = jQuery(this).val().replace(/^\s+|\s+$/g, '');
		if( (jQuery(this).val() != '') && (!amount.match(/^$/) )){
			jQuery(this).val( parseInt(amount).toFixed(2));
		}
	});
});


//call add metric function
 addMetric();
jQuery(".data-type select").change(function(){
 addMetric(); 
});


//accept integer value
jQuery(".metric-total input").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        //jQuery("#errmsg").html("Digits Only").show().fadeOut("slow");
               return false;
    }
});


//into tip
infoTip();

//add metric
var inputs = 1; 
var selectZndex = 50;

jQuery('#btnAdd').click(function() { 	
        jQuery('.btnDel:disabled').removeAttr('disabled');
        jQuery(".DivSelectyze.grey").css('z-index');
		var c = jQuery('.clonedInput:first').clone(true,true);
            c.children(':text').attr('name','input'+ (++inputs) );
        jQuery('.clonedInput:last').after(c);
		jQuery('.clonedInput:last').find("input:text").val("");
		jQuery('.clonedInput:last').find(".metric-ratio input").val("");
		jQuery('.clonedInput:last').find(".data-type select").val("");
		//jQuery('.clonedInput:last').find(".DivSelectyze.grey").css('z-index','99' + selectZndex--);
		
		
 			addMetric();
 
		
		//info function
		//infoTip();
					
		jQuery(".data-type select").change(function(){			
			addMetric();
		});
		

    });
	
	
	//delete clone 
    jQuery('.btnDel').click(function() {
        if (confirm('continue delete?')) {
            --inputs;
            jQuery(this).closest('.clonedInput').remove();
			if(jQuery('.clonedInput').length  < 2){
            	jQuery('.btnDel').attr('disabled','disabled');
			}
         }
});



//Set the Stakes
var inputs2 = 1;    
var winnerName = ["First Place", "Second Place","Third Place","Fourth Place","Fifth Place","Sixth Place","Seventh Plave","Eighth Place"];

jQuery('.clonedInput2:last').find(".sr-no").html("#1");

jQuery('#btnAdd2').click(function() {
       var srNoIn = jQuery('.scroll-pane .clonedInput2').length;
	    jQuery('.btnDel2:disabled').removeAttr('disabled');
		
        var c = jQuery('.clonedInput2:first').clone(true,true);
            c.children(':text').attr('name','input'+ (++inputs) );
        jQuery('.clonedInput2:last').after(c);		
		jQuery('.clonedInput2:last').find(".sr-no").html("#"+(srNoIn+1));
		jQuery('.clonedInput2:last').find("input:text").val("");
		jQuery('.clonedInput2:last').find(".winning-spot input").attr('placeholder',winnerName[srNoIn]);
		
		
		
    });
	
	
	//delete clone 
    jQuery('.btnDel2').click(function() {
        if (confirm('continue delete?')) {
            --inputs;
            jQuery(this).closest('.clonedInput2').remove();
            if(jQuery('.clonedInput2').length  < 2){
				jQuery('.btnDel2').attr('disabled','disabled');
			}
			
			var srNoIn = 1;
			jQuery('.scroll-pane .clonedInput2').each(function(){
				jQuery(this).find(".sr-no").html("#"+(srNoIn));
				jQuery(this).find(".winning-spot input").attr('placeholder',winnerName[srNoIn-1]);			
				srNoIn++;
			});
			
			
		}
});





//add contest - step2 - game type
/*jQuery(".game-box .form-checkbox .iCheck-helper").click(function(){
	
	
});*/


jQuery(".game-box label").click(function(){
	jQuery(".game-box label").each(function(){
		if(jQuery(this).find('.icheckbox_minimal-blue').hasClass('checked')){
			//jQuery(".game-box").removeClass('selected');
			jQuery(this).parent().addClass('selected');
			jQuery('.user-img-small img').attr('src',jQuery(this).find('.game-img img').attr('src'));
			//console.log("yes");
		}else{
			//jQuery(".game-box").removeClass('selected');
			jQuery(this).parent().removeClass('selected');
			//console.log("no");
		}
	});
	
	
});





//date-time picker
jQuery('.datetimepicker').datetimepicker();

  
// showing little cross button on keypress and hiding that on closing little cross in search input boxes  
  jQuery('.search-input input.form-control').keyup("input", function() {
	  var dInput = jQuery(this).val().length;
	  if(dInput > 0) {
	  jQuery(this).parent().find('.clear-input').css('display','block');
	  
	  jQuery('.search-input .clear-input').click(function(){	 
			
			jQuery(".form-control").focus();
			jQuery(".form-control").trigger('keydown');

	  });
		
	  }
	  else
	  {
	   jQuery(this).parent().find('.clear-input').css('display','none');  			 
	  }
  });  
  	
  jQuery('.search-input .clear-input').click(function(){	   
	  jQuery(this).parent().find('input.form-control').val('');	 
	 /* jQuery('html').keyup(function(e){
		  if(e.keyCode == 8){
	 	 	alert('backspace trapped');
	 	 }
	  }); */
	  
	  jQuery(this).css('display','none'); 	  
   });
   

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
jQuery('.radio-crm *').click(function(){
  jQuery('.select-crm').show();
  jQuery('.select-crm option:first-child').prop("selected", "selected");
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
jQuery('.radio-csv *').click(function(){
  jQuery('.select-crm option:first-child').prop("selected", "selected");
  jQuery('.select-crm').hide();
  jQuery('.salesforce-input').hide();
});
 
 
jQuery('.clear-error-input').click(function(){
  jQuery(this).parent().find('input[type=email], input[type=text], textarea').val('');	 
  jQuery(this).parent().find('.error-msg').hide();	     
  jQuery(this).parent().parent().removeClass('error');	   
});
 
 

jQuery('.backend-forms td.actions').each(function(){
	jQuery(this).click(function(){
	
		if(jQuery(this).find('.pop-hover').is(":hidden")){
			jQuery(".pop-hover").hide();
			jQuery(this).find(".pop-hover").show();
			}
			else if(jQuery(this).find('.pop-hover').is(":visible")){
			jQuery(this).find(".pop-hover").hide();
			//jQuery(this).find(".pop-hover").hide(800);
			}
	});
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



jQuery(document).ready(function(){
	
	
	//switcher
	
	/*jQuery('#slider-1.demo input').iCheck('destroy');
	jQuery("#slider-1.demo input").switchButton({
          width:62,
          height:32,
          button_width:124
        });
 	
	jQuery('#slider-2.demo input').iCheck('destroy');
	jQuery("#slider-2.demo input").switchButton({
          width:62,
          height:32,
          button_width:124
        });
*/

jQuery('.onoffswitch-checkbox, .onoffswitch-checkbox2').iCheck('destroy');
/*
jQuery(".onoffswitch-label").click(function(){
	
	if(jQuery("#myonoffswitch2").attr('checked')){
		setTimeout(function(){	
			//jQuery(this).find(".onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch").css({"opacity":"1"});	
			jQuery(this).next('.onoffswitch-label').find(".onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch").css({"opacity":"1"});
		},400); 
		}else{
		setTimeout(function(){	
			//jQuery(this).find(".onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch").css({"opacity":"1"});	
			jQuery(this).next('.onoffswitch-label').find(".onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch").removeAttr('style');
		},400); 
		}
		
});
*/

//notifications
jQuery(".onoffswitch2").each(function(){
if(jQuery(this).find('input').prop('checked')==true){
	jQuery(this).find(".checked").animate({opacity:1},80);
	jQuery(this).find(".tick-icon").animate({opacity:1, right:0},500);	
	 
	
}else if(jQuery(this).find('input').prop('checked')==false){
	jQuery(this).find(".checked").animate({opacity:0},80);
	jQuery(this).find(".tick-icon").animate({opacity:0, right:'-29px'},100);
	 
}
 
jQuery(this).click(function(){
	if(jQuery(this).find('input').prop('checked')==true){
			jQuery(this).find(".checked").animate({opacity:1},80);
			jQuery(this).find(".tick-icon").animate({opacity:1, right:0},500);		
			
		}else{
			jQuery(this).find(".checked").animate({opacity:0},80);
			jQuery(this).find(".tick-icon").animate({opacity:0, right:'-29px'},100);
			}
			
	});
});

//tooltip plugin init	
	jQuery('.hastip').tooltipsy({
		//offset: [10, 0],
		css: {
			'padding': '10px',
			'max-width': '250px',
			'color': '#3e3f54',
			'background-color': '#fff',
			'border': '1px solid #fff',
			'-moz-box-shadow': '0 0 8px rgba(0, 0, 0, .3)',
			'-webkit-box-shadow': '0 0 8px rgba(0, 0, 0, .3)',
			'box-shadow': '0 0 8px rgba(0, 0, 0, .3)',
			'text-shadow': 'none',
			'border-radius':'4px'
		}
	});
	
	jQuery('.achievement_tip').tooltipsy({
		offset: [0, -50],
		css: {
			'padding': '10px',
			'max-width': '218px',
			'color': '#3e3f54',
			'background-color': '#fff',
			'border': '1px solid #fff',
			'-moz-box-shadow': '0 0 6px rgba(0, 0, 0, .3)',
			'-webkit-box-shadow': '0 0 6px rgba(0, 0, 0, .3)',
			'box-shadow': '0 0 6px rgba(0, 0, 0, .3)',
			'text-shadow': 'none',
			'border-radius':'4px'
		}
	});

	jQuery('.achievement_tip2').tooltipsy({
		offset: [0, -20],
		css: {
			'padding': '10px',
			'max-width': '218px',
			'color': '#3e3f54',
			'background-color': '#fff',
			'border': '1px solid #fff',
			'-moz-box-shadow': '0 0 6px rgba(0, 0, 0, .3)',
			'-webkit-box-shadow': '0 0 6px rgba(0, 0, 0, .3)',
			'box-shadow': '0 0 6px rgba(0, 0, 0, .3)',
			'text-shadow': 'none',
			'border-radius':'4px'
		}
	});


});


/*Create Your Lineup - teams management*/
function editTeam(){
 jQuery('.create-lineup .teams-list li').click(function(){
   jQuery('.create-lineup .teams-list li').removeClass('active');	  
   jQuery(this).addClass('active');	
   
   jQuery('.teams-edit-area .add-state').css({'display':'none'});	   
   jQuery('.teams-edit-area .edit-state').css({'display':'none'});	   
   jQuery('.teams-edit-area .display-state').css({'display':'block'});	 

   var nameToBeEdited = jQuery(this).find('.name').text();	     
   jQuery('.teams-edit-area .display-state .name').text(nameToBeEdited);
   jQuery('.teams-edit-area .display-state .name').css({'display':'inline-block'});
 });	
}

function deleteTeam(){
 jQuery('.create-lineup .teams-list .close-button').click(function(){
   jQuery(this).parent().remove();	
   jQuery('.teams-edit-area .add-state').css({'display':'none'});	 
   jQuery('.teams-edit-area .edit-state').css({'display':'none'});	
   jQuery('.teams-edit-area .display-state').css({'display':'none'});	 
 }); 
}

jQuery(document).ready(function(){
  editTeam();	
  deleteTeam();
	
 //Entering text in input box	
  jQuery('.teams-edit-area .edit-state input, .teams-edit-area .add-state input').keyup("input", function() {
	var dInput = jQuery(this).val().length;
	if(dInput > 0) {
	 jQuery('.teams-edit-area .add-state li:nth-child(2)').css({'display':'inline-block'});
	 jQuery('.teams-edit-area .edit-state li:nth-child(2)').css({'display':'inline-block'});
	}
	else
	{
	 jQuery('.teams-edit-area .add-state li:nth-child(2)').css({'display':'none'});		
	 jQuery('.teams-edit-area .edit-state li:nth-child(2)').css({'display':'none'});			 
	}
  });
	
 //Adding a new team 
 jQuery('.create-lineup .teams-list a.add-new-team').click(function(){
  jQuery('.create-lineup .teams-list li').removeClass('active');	  
  jQuery('.teams-edit-area .edit-state').css({'display':'none'});	   
  jQuery('.teams-edit-area .display-state').css({'display':'none'});
  jQuery('.teams-edit-area .add-state').css({'display':'block'});  
  jQuery('.teams-edit-area .add-state .team-name').attr("value",''); 
 }); 
 
 //Clicking on save	(Add State)
 jQuery('.teams-edit-area .add-state .save').click(function(){
  name = jQuery('.teams-edit-area .add-state input').val();
  jQuery('.teams-edit-area .add-state input').attr("value", '');   
  
  var newli = '<li class="new"><div class="name">'+name+'</div><div class="player-count">No Players</div><div class="close-button"><a href="#"><i class="fa fa-times"></i></a></div></li>';
  jQuery(".create-lineup .teams-list > ul").append(newli);
  
  editTeam();
  deleteTeam();  
  
  jQuery('.teams-edit-area .add-state').css({'display':'none'});	   
  jQuery('.teams-edit-area .edit-state').css({'display':'none'});	     
  jQuery('.teams-edit-area .display-state').css({'display':'block'});	   
  jQuery('.teams-edit-area .display-state .name').css({'display':'none'});
 });

 //clicking on cancel (Add State)
 jQuery('.teams-edit-area .add-state .cancel').click(function(){
  jQuery('.teams-edit-area .add-state').css({'display':'none'});	   
  jQuery('.teams-edit-area .display-state').css({'display':'block'});	 
 });	

 //Editing	
 //editing a team from teams list	
 jQuery('.create-lineup .teams-list li').click(function(){
   jQuery('.create-lineup .teams-list li').removeClass('active');	  
   jQuery(this).addClass('active');	
   
   jQuery('.teams-edit-area .add-state').css({'display':'none'});	   
   jQuery('.teams-edit-area .edit-state').css({'display':'none'});	   
   jQuery('.teams-edit-area .display-state').css({'display':'block'});	 

   var nameToBeEdited = jQuery(this).find('.name').text();	     
   jQuery('.teams-edit-area .display-state .name').text(nameToBeEdited);
   jQuery('.teams-edit-area .display-state .name').css({'display':'inline-block'});
 });	
 
 //opening edit form when clicking on name	
 jQuery('.teams-edit-area .display-state .name').click(function(){
  jQuery('.teams-edit-area .display-state').css({'display':'none'});	 
  jQuery('.teams-edit-area .edit-state').css({'display':'block'});	   
  
  var name = jQuery('.create-lineup .teams-list li.active').find('.name').text();	 
  jQuery('.teams-edit-area .edit-state').find('.team-name').attr("placeholder",name);
  jQuery('.teams-edit-area .edit-state').find('.team-name').attr("value",'');
 });

 //Clicking on save (Edit State)
 jQuery('.teams-edit-area .edit-state .save').click(function(){
  name = jQuery('.teams-edit-area .edit-state input').val();
  jQuery('.teams-edit-area .edit-state').find('.team-name').attr("placeholder", '');
  jQuery('.create-lineup .teams-list li.active').find('.name').text(name);	 
  jQuery('.teams-edit-area .edit-state').css({'display':'none'});	   
  jQuery('.teams-edit-area .display-state').css({'display':'block'});	 
  jQuery('.teams-edit-area .display-state .name').text(name);	 
 });

 //clicking on cancel
 jQuery('.teams-edit-area .edit-state .cancel').click(function(){
  jQuery('.teams-edit-area .edit-state').css({'display':'none'});	   
  jQuery('.teams-edit-area .display-state').css({'display':'block'});	 
 });

});

