$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer); 
  
  $('.button').on('click',function() {
      for (var i = 0; i < window.dancers.length; i++) {
          window.dancers[i].lineUp();
    
      }
    });

  $('.dancer').on('click',function(){
    var num = Math.random(0,1) * 1000;
    console.log(num)
    if(num > 50){
    $(this).animate({left: '200px'}, 10000);
    } else {
    $(this).animate({right: '200px'}, 100);
    }
  })

});


})

