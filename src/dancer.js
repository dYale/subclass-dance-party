  // Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = 2000;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top,left);
  this.step();


   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the 

  // Dancer.prototype.step.call(Dancer.prototype, timeBetweenSteps)
  // Dancer.prototype.setPosition.apply(Dancer.prototype, [top, left])
//this typestep needs to be invoke with top and left
// 
};

Dancer.prototype.lineUp = function() {
        var location = $('body').width() * 0.60;
        this.$node.css('left', location)
  }




  Dancer.prototype.step = function(timeBetweenSteps){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout(function(){              
      that.step(that.timeBetweenSteps);
    }, that.timeBetweenSteps);
    var x = Math.random(0,1) * 1000;
    console.log(window.width)
      var y = Math.random(0,1) * 1000;
    $('.dancer').animate(
      {left: x+'px', top: y+'px'},1000)
  };


  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/


    var styleSettings = {
      top: top,
      left: left
    };

    // this is returning DOM element instead of Javascript object
    this.$node.css(styleSettings);
  };


//use jQuery, respond to mouse click to create instance of gif
//invoke select dancer functions with random variables Math.random
//maintain and/or change locations with every iteratorion of step.

