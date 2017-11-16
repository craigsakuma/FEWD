$(document).ready(function(){
  // initially hide the read more and learn more sections 
  $('.hide').hide();
  $('#hide-blog').hide();

  // show read-more blog text
  $('.readmore').click(function(event){
    event.preventDefault();
    $('.readmore').hide();
    $('#show-this-on-click').slideDown();
    $('.readless').show();
  })

  // hide read-more blog text
  $('.readless').click(function(event){
    event.preventDefault();
    $('.readless').hide();  
    $('#show-this-on-click').slideUp();
    $('.readmore').show();
  })

  // show learn-more text
  $('.learnmore').click(function(event){
    event.preventDefault();
    $('.learnmore').hide();
    $('#learn-more-text').slideDown();
  })

})