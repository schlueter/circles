$(document).ready(function() {
  var splits = 0;
  function mouseSplit() { 
    $('.circle').mouseover(function () {
      split($(this));
    });
    console.log(splits);
  }

  function split(circle) {
    splits += 1;
    circle.removeClass('circle')
          .unbind(); 
    
    circle.html('<div class="circle"></div>' +
                '<div class="circle"></div>' +
                '<div class="circle"></div>' +
                '<div class="circle"></div>');
    mouseSplit();
  }
  
  mouseSplit();
});
