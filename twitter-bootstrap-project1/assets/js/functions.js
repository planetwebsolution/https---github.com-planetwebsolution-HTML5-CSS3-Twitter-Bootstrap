var $ = jQuery.noConflict();

function syncHeightFunction(){
  // Equal Elements Heights  
  if($(window).width() < 767){
	  $('.category-banner > .container > .row > div').matchHeight({remove: true});
  }			
  else {	 
	  $('.category-banner > .container > .row > div').matchHeight();
  }	
}

$(document).ready(function () {
   //Syncing height of boxes	
   syncHeightFunction();
   
   //Opening dropdown on click 
   $('.mainmenu > li.hasDropdown').click(function(){
     $('.dropdown').slideToggle();	   
   });
   
	
  //Responsive menu for mobile 
  $('.mainmenu').flexMenu({breakpoint: 767, responsivePattern: 'toggle'}); 
	
  //Homepage boxes hover effect
  $('.home-boxes .box.hasHover').hover(function(){
    $(this).find('.box-inner').fadeIn();
  },function(){
    $(this).find('.box-inner').fadeOut();	  
  });
 
  //Products Boxes - Making whole box clickable
  $('.product-boxes .box').click(function(){
   window.location = $("a:first", this).attr("href");
  }); 
 
  //Product Detail page images slider
  $('.product-detail-images ul.slider').bxSlider({'auto': true, 'pager': false, 'controls': true, 'speed': 1000, 'pause': 4000, 'adaptiveHeight': true}); 
  
  //Artist Studio Page - hover
  $('.artists-list .box').hover(function(){
   if($(this).hasClass('clicked') || $(this).hasClass('show-overlay')){}
   else	$(this).addClass('hover');   
  },function(){
	$(this).removeClass('hover');   	  
  });   
 
  //Artist Studio Page - clicked 
  $('.artists-list .box a').click(function(){
	$(this).parent().parent().removeClass('hover');   
	$('.artists-list .box').addClass('show-overlay');   
	$(this).parent().parent().addClass('clicked');   
	$(this).parent().parent().next().slideDown();   	
  });  
 
  $('.artists-list .artist-detail .close').click(function(){
	$(this).parent().prev().removeClass('clicked');   		
	$('.artists-list .box').removeClass('show-overlay');   			
	$(this).parent().slideUp();   	
  });  
 
 
  //Google map on conatct page
  $("#contactpage-map").gmap3({
	map:{
	  options:{
		center:[40.131556, -96.192344],
		zoom: 5,
		navigationControl: false,
		scrollwheel: false,
		panControl: false,
		zoomControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		rotateControlOptions: false,
		overviewMapControl: false,
		OverviewMapControlOptions: false	
	  }	
	},
	marker:{ /*Marker value can be latLng OR google map address*/
	  values:[
		{address: "9181 Boivin Lasalle, Quebec H8R 2E8", options:{icon: new google.maps.MarkerImage("assets/img/renwil-icon-big.png", new google.maps.Size(59, 56, "px", "px"))}},
		{address: "World Market Center A425 Las Vegas, NV 89106, USA", options:{icon: new google.maps.MarkerImage("assets/img/renwil-icon-small.png", new google.maps.Size(41, 39, "px", "px"))}},
		{address: "T.I.C.C. 6900 Airport Rd. Suite 101 Mississauga, Ontario L4V 1E8", options:{icon: new google.maps.MarkerImage("assets/img/renwil-icon-small.png", new google.maps.Size(41, 39, "px", "px"))}},	  
		{address: "World Market Center #10014 Dallas, TX, USA", options:{icon: new google.maps.MarkerImage("assets/img/renwil-icon-small.png", new google.maps.Size(41, 39, "px", "px"))}},			  
		{address: "164 South Main Street, Suite D409 High Point, NC 27260, USA", options:{icon: new google.maps.MarkerImage("assets/img/renwil-icon-small.png", new google.maps.Size(41, 39, "px", "px"))}}
		 ]
	  }
  });  
 
 
});




