var BatmanDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="batmanDancer"></span>');
  this.setPosition(top, left);
};

BatmanDancer.prototype = Object.create(Dancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer;

BatmanDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle("5000");
};