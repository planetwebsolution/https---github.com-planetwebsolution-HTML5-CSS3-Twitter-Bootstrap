var $ = jQuery.noConflict();

function syncHeightFunction(){
  // Equal Elements Heights
  if($(window).width() < 767){
	  $('.three-boxes .box').unSyncHeight();
	  $('.home-testimonials .box').unSyncHeight();	
	  $('footer .boxes .row > div').unSyncHeight();	
	  $('.how-steps .same-height').unSyncHeight();		  
  }			
  else {
	  $('.three-boxes .box').syncHeight({updateOnResize: false});
	  $('.home-testimonials .box').syncHeight({updateOnResize: false}); 
	  $('footer .boxes .row > div').syncHeight({updateOnResize: false}); 
	  $('.how-steps .same-height').syncHeight({updateOnResize: false}); 
  }	
  var mHeight = $('.how-steps .same-height').css('min-height');
  $('.how-steps .same-height').css('height', mHeight);  
}

$(document).ready(function () {
  //Responsive menu for mobile 
  $('.topnav').flexMenu({breakpoint: 767, responsivePattern: 'toggle'}); 

  $('#site-header .slider ul').bxSlider({'auto': true, 'pager': true, 'controls': true, 'speed': 1000, 'pause': 4000, 'adaptiveHeight': true}); 

  //Featured Clients Slider
  var owl = $('.featured-clients ul');
  owl.owlCarousel({
  margin: 0,
  dots:false,
  mouseDrag:true,
  nav: false,
  loop: true,
  responsive: {
	  0: {
		  items: 1,
		  nav:true
	  },
	  600: {
		  items: 2,
		  nav:true
	  },
	  1000: {
		  items: 3,
		  nav: true,
	  },
	  1200: {
		  items: 4,
		  nav: false,
	  }
  }
  });	
  
  
  //Homepage testimonial slider
  var owl = $('.home-testimonials ul');
  owl.owlCarousel({
  margin: 30,
  dots:false,
  mouseDrag:true,
  nav: false,
  loop: true,
  responsive: {
	  0: {
		  items: 1,
		  nav:true
	  },
	  600: {
		  items: 2,
		  nav:true
	  },
	  1000: {
		  items: 2,
		  nav: true
	  },
	  1200: {
		  items: 2,
		  nav: true
	  }
  }
  });	  
  
  
  //managing steps on checkout page
  $('.step > .step-head, .step > .step-head .edit-link a').click(function(){
	$(this).next().slideToggle();   
  });
  
  //switch between login/forget password form
  $('.open-pass-form').click(function(){
	$('#agency-login-form').hide();   
	$('#agency-forgot-form').show();   
  });
  
  $('.open-login-form').click(function(){
	$('#agency-forgot-form').hide();   
	$('#agency-login-form').show();   
  });  
  
  
  

});


$(window).on('load resize',function(e){
  syncHeightFunction();
});

$(window).bind('scroll', function(){
	if($(window).width() > 767){
     if($(this).scrollTop() >= 50) 
	 { 
	   $(".topbar").addClass('sticky'); 
	   $(".banner-text").addClass('sticky'); 	   
	 }
 	 else 
	 { 
	   $(".topbar").removeClass('sticky'); 
	   $(".banner-text").removeClass('sticky'); 	   
	 }
	}
});
