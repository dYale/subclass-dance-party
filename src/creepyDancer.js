
var makeCreepyDancer = function(top, left, timeBetweenSteps){
  
  Dancer.call(this, top, left, timeBetweenSteps)
  var num = Math.random() * 100;
  if(num > 50){
      this.$node.append("<img src=http://i.imgur.com/0CqveeT.gif>")
  } else {
    this.$node.append("<img src=http://38.media.tumblr.com/d06d87acb994608d3b31302eb909ec2b/tumblr_ne7rzmVKbF1tzlc6mo1_250.gif>")
  } 
};

makeCreepyDancer.prototype = Object.create(Dancer.prototype);
makeCreepyDancer.prototype.constructor = makeCreepyDancer;
makeCreepyDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    var x = Math.random(0,1) * $(document).width;
      var y = Math.random(0,1) * 500;
    $('.dancer').animate(
      {left: x+'px', top: y+'px'},500)

  };



makeCreepyDancer.prototype.lineUp = function() {
    Dancer.prototype.lineUp.call(this);
    var location = $('body').width() * Math.random();
    this.$node.css('left', location)
}
