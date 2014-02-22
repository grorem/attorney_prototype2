$(function() {
    $('.gallery1').mouseenter(function(event){
    	
        $('.seeit1').slideDown(200);
        
    });


    

});


$(function() {
    $('.gallery1').mouseleave(function(event){
        
        $('.seeit1').slideUp(200);
        
    });


    

});



$(function() {
    $('.gallery2').mouseenter(function(event){
        
        $('.seeit2').slideDown(200);
        
    });


    

});


$(function() {
    $('.gallery2').mouseleave(function(event){
        
        $('.seeit2').slideUp(200);
        
    });


    

});



 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 500);
        return false;
      }
    }
  });
});







$(function(){
    $(".extoggle").click(function(){
      
  
        $(this).fadeOut(10);
        $('.extoggled').delay(10).fadeIn();
        
        $('.hider').fadeOut(60);
        $('.shower').delay(60).fadeIn();

   

    });
});


$(function(){
    $(".extoggled").click(function(){
      
  
        $(this).fadeOut(10);
        $('.extoggle').delay(10).fadeIn();

        $(this)
        $('.shower').fadeOut(60);
        $('.hider').delay(60).fadeIn();
        

   

    });
});


$(window).scroll(function(e){ 
  $el = $('.nav'); 
  if ($(this).scrollTop() > 450 && $el.css('position') != 'fixed'){ 
    $('.nav').css({'position': 'fixed', 'top': '0px'}); 
  } 
});


$(window).scroll(function(e){ 
  $el = $('.nav'); 
  if ($(this).scrollTop() < 450 && $el.css('position') != 'static'){ 
    $('.nav').css({'position': 'static'}); 
  } 
});



$(function(){
    $(".menu").click(function(){
      
        
        $('.mobileNavigation').fadeIn();


    });
});



$(function(){
    $(".topper").click(function(){
      
        
        $('.mobileNavigation').fadeOut();


    });
});


$(function(){
    $(".mobileNavigation a").click(function(){
      
        
        $('.mobileNavigation').fadeOut();


    });
});





