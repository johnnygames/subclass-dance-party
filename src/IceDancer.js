var IceDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="iceDancer"></span>');
  this.setPosition(top, left);
};

IceDancer.prototype = Object.create(Dancer.prototype);
IceDancer.prototype.constructor = IceDancer;

IceDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var node = this.$node;
  var count = 0;
  while(count < 100){
    node.animate({left: '1250px', opacity: '0.5'}, "slow");
    node.animate({left: '0px', opacity: '1'}, "slow");
    count++;
  }
};