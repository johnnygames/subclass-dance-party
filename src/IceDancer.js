var IceDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer" id="iceDancer"></span>');
  this.setPosition(top, left);
};

IceDancer.prototype = Object.create(Dancer.prototype);
IceDancer.prototype.constructor = IceDancer;

IceDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var node = this.$node;
  var count = 0;
  this.move = true;
  while(this.move){
    node.animate({left: '+=50', opacity: '0.5'}, 400)
    .animate({top: '+=50', opacity: '0.5'}, 400)
    .animate({left: '-=50', opacity: '1'}, 400)
    .animate({top: '-=50', opacity: '1'}, 400);
    count++;
    if(count >= 100){
      this.move = false;
    }
  }
};
