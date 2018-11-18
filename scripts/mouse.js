$(document).ready(function() {

  $(document).mousemove(function(event){
    $('.mouse-container').append('<div class="mouse-print" style="top:' + event.pageY + 'px; left:' + event.pageX + 'px;"></div>');
    });
    
  });

  

  // event.pageX
  // The mouse position relative to the left edge of the document.
  
  // event.pageY
  // The mouse position relative to the top edge of the document.

