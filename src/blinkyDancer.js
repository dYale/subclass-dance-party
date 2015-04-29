
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  Dancer.apply(this, arguments)
  var num = Math.random() * 100;
  if(num > 50){
      this.$node.append("<img src=http://i.imgur.com/adlmpwy.gif>");
    } else {
      this.$node.append("<img src=http://33.media.tumblr.com/tumblr_m57jskyTW01qhuanoo1_500.gif>");
    }

};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
      Dancer.prototype.step.call(this);
};