
var makeNewDancer = function(top, left, timeBetweenSteps){
  
  Dancer.call(this, top, left, timeBetweenSteps)
  this.$node.append("<img src=http://38.media.tumblr.com/961a28beb9afc75ccf5d7c4e4580b33c/tumblr_n70j79rywc1qcc8dao1_500.gif>")

};

makeNewDancer.prototype = Object.create(Dancer.prototype);
makeNewDancer.prototype.constructor = makeNewDancer;
makeNewDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var x = Math.random(0,1) * 500;
    console.log(window.width)
      var y = Math.random(0,1) * 1500;
    $('.dancer').animate(
      {left: x+'px', top: y+'px'},200)
};

makeNewDancer.prototype.lineUp = function() {
    Dancer.prototype.lineUp.call(this);
    var location = $('body').width() * 0.40;
    this.$node.css('left', location)
}
