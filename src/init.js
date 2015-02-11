$(document).ready(function(){
  window.dancers = [];

  $(".lineUp").on("click", function(event){
    for(var i = 0; i < window.dancers.length; i++){
      dancers[i].lineUp();
    }
  });

  var distance = function(i, j){
    var topDis = Math.abs(i.top - j.top);
    //console.log(topDis);
    var widthDis = Math.abs(i.left - j.left);
    //console.log(widthDis);
    var distance = Math.floor(Math.sqrt(Math.pow(topDis, 2) + Math.pow(widthDis, 2)));
    return distance;
  }

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    $(".dancer").mouseover(function(event){
      $(this).css('border-color', 'green');
    });

    if(window.dancers.length > 2){
      for(var i = 0; i < window.dancers.length; i++){
        for(var j = 0; j < window.dancers.length; j++){
          var dis = distance(window.dancers[i], window.dancers[j]);
          if (dis < 100) {
            window.dancers[i].$node.animate({left: '+=50'}, 400);
          }
        }
      }
    }
      // var dis = distance(window.dancers[0], window.dancers[1]);
      // if (dis < 100) {
      //   window.dancers[0].animate({left: '+=50', opacity: '0.5'}, 400);
      //   $('body').css('background-color', 'white');
      // }
  });

});

