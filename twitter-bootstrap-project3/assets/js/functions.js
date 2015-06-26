var $ = jQuery.noConflict();


 
// End Gallery




function syncHeightFunction(){
  // Equal Elements Heights
  if($(window).width() < 767){
	  $('.video-area .same-height').unSyncHeight();
	  $('#unbeatable-service .same-height').unSyncHeight();
	  $('#cities .inner').unSyncHeight();
	  $('#middle .row .same-height').unSyncHeight();
  }			
  else {
	  $('.video-area .same-height').syncHeight({updateOnResize: false});
	  $('#unbeatable-service .same-height').syncHeight({updateOnResize: false});
	  $('#cities .inner').syncHeight({updateOnResize: false});	
	  $('#middle .row .same-height').syncHeight({updateOnResize: false});
  }	
}

$(document).ready(function () {
  //Responsive menu for mobile 
  $('#header-nav ul').flexMenu({breakpoint: 767, responsivePattern: 'toggle'}); 
  
  /**Accordion**/
  jQuery(".sidebar-accordion .accordion-block:first-child").find("ul").css("display", "block");	
  
  jQuery(".accordion-block h3").each(function(){
	
	jQuery(this).click(function(){
		if(jQuery(this).next("ul").is(":hidden"))
		{
		jQuery(".accordion-block h3").find("span img:first-child").css("display", "block");
		jQuery(".accordion-block h3").find("span img:last-child").css("display", "none");
		jQuery(".accordion-block h3").next("ul").slideUp(500); 
		jQuery(this).next("ul").slideDown(500);
		jQuery(this).find("span img:first-child").css("display", "none");
		jQuery(this).find("span img:last-child").css("display", "block");
		}
	});  
	  
	  
});

/**Accordion**/


/*Owl carousel*/
 jQuery('.system-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

/*Owl carousel*/



});




$(window).on("load resize",function(e){
 syncHeightFunction();
});