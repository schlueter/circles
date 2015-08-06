$(document).ready(function() {
  function splitOnMouseover(target) { 
    target.mouseover(function () {
      split($(this));
    });
  }

  function setRandomBgColor(target) {
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    target.css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  }

  function split(circle) {
    circle.removeClass('circle')
          .css('background-color', 'white')
          .unbind(); 
    
    circle.html('<div class="circle container"></div>' +
                '<div class="circle container"></div>' +
                '<div class="circle container"></div>' +
                '<div class="circle container"></div>');
    circle.children('.circle').each( function () {
      splitOnMouseover($(this));
      setRandomBgColor($(this));
    });
  }
  
  splitOnMouseover($('.circle'));
});
