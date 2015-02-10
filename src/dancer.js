// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function() {
    that.step()
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  var newSetting = {
    top: this.top,
    left: 0
  };
  this.$node.css(newSetting);
};


// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step

// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
//

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body