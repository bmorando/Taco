
//this is where the spinner is
$(".btn").click(function() {
  spinner();
});

function spinner(){
var number = Math.random()
$('.maincontainer').hide()
$('.p').click(function() {
     $('.play').fadeOut(3000)
     $('.maincontainer').fadeIn(7000)
});



var classColor;
var classColorR;

if(number <= 0.198){
  console.log("spot1")
  console.log("red")
  $(".red").addClass('changered')
  classColor = ".red"
  classColorR ="changered"
  trivia();

}else if(number <= 0.396){
  console.log("spot2")
  console.log("blue")
  $(".blue").addClass('changeblue')
  classColor = ".blue"
  classColorR ="changeblue"
  trivia();
}else if(number <= 0.594){
  console.log("spot3")
  console.log("green")
  $(".green").addClass('changegreen')
  classColor = ".green"
  classColorR ="changegreen"
  trivia();

}else if(number <= 0.792){
  console.log("spot4")
  console.log("purple")
  $(".purple").addClass('changepurple')
  classColor = ".purple"
  classColorR ="changepurple"
  trivia();
}else{
  console.log("spot5")
  console.log("pink")
  $(".pink").addClass('changepink')
  classColor = ".pink"
  classColorR ="changepink"
  trivia();
}
console.log(number)

setTimeout(function(){

$(classColor).removeClass(classColorR)

}, 1000);

};
//end of spinner

//Alternating turns
var player;
var player1;
var player2;
var answerCorrect;

var player1 = {
  value: 1,
  score: 0,
  gainedPoint: function(){
    this.score++
  $("#player1").html(this.score)
  }
}
var player2 = {
  value: 2,
  score: 0,
  gainedPoint: function(){
    this.score++
  $("#player2").html(this.score)
  }
}


player = player1;
//<--part of box A-->
$('.answer1').click(function() {
  $('.boxA').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1;
    }
  });
  $('.answer2').click(function() {
  $('.boxA').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
      console.log("Player1 gainedPoint")
    }else{
       player2.gainedPoint();

      console.log("Player2 gainedPoint")
    }
  });
  $('.answer3').click(function() {
  $('.boxA').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  //<--end of A-->
  $('.answer4').click(function() {
  $('.boxB').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer5').click(function() {
  $('.boxB').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
  $('.answer6').click(function() {
  $('.boxB').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
      console.log("Player1 gainedPoint")

    }else{
       player2.gainedPoint();

    }
  });
  //<--end of B-->
    $('.answer7').click(function() {
  $('.boxC').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer8').click(function() {
  $('.boxC').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
      console.log("Player1 gainedPoint")

    }else{
       player2.gainedPoint();

    }
});
  $('.answer9').click(function() {
  $('.boxC').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
  //<--end of C-->
$('.answer10').click(function() {
  $('.boxD').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
       player2.gainedPoint();
    }
  });
  $('.answer11').click(function() {
  $('.boxD').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
  $('.answer12').click(function() {
  $('.boxD').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
  }else{
      player = player1
    }
  });
//<--end of D-->
$('.answer13').click(function() {
  $('.boxE').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });

  $('.answer14').click(function() {
  $('.boxE').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
       player2.gainedPoint();
    }
  });

  $('.answer15').click(function() {
  $('.boxE').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }

  });
//<--end of E-->
  $('.answer16').click(function() {
  $('.boxF').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
       player2.gainedPoint();
    }
   });

  $('.answer17').click(function() {
  $('.boxF').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
  $('.answer18').click(function() {
  $('.boxF').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
//<--end of F-->
 $('.answer19').click(function() {
  $('.boxG').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
       player2.gainedPoint();

    }
  });
  $('.answer20').click(function() {
  $('.boxG').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
  $('.answer21').click(function() {
  $('.boxG').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
//<--end of G-->
  $('.answer22').click(function() {
  $('.boxH').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
  $('.answer23').click(function() {
  $('.boxH').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
       player2.gainedPoint();
    }
  });
  $('.answer24').click(function() {
  $('.boxH').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
//<--end of H-->
$('.answer25').click(function() {
  $('.boxI').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
  $('.answer26').click(function() {
  $('.boxI').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
    });

  $('.answer27').click(function() {
  $('.boxI').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
       player2.gainedPoint();
    }
  });
//<--end of I-->
  $('.answer28').click(function() {
  $('.boxJ').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer29').click(function() {
  $('.boxJ').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
       player2.gainedPoint();
    }
  });
  $('.answer30').click(function() {
  $('.boxJ').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
//<--end of J-->
  $('.answer31').click(function() {
  $('.boxK').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer32').click(function() {
  $('.boxK').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
       player2.gainedPoint();
    }
  });
  $('.answer33').click(function() {
  $('.boxK').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
//<--end of K-->
  $('.answer34').click(function() {
  $('.boxL').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
       player2.gainedPoint();
    }
    });
  $('.answer35').click(function() {
  $('.boxL').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer36').click(function() {
  $('.boxL').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
//<--end of L-->
  $('.answer37').click(function() {
  $('.boxM').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
});
  $('.answer38').click(function() {
  $('.boxM').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer39').click(function() {
  $('.boxM').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });

//<--end of M-->
  $('.answer40').click(function() {
  $('.boxN').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer41').click(function() {
  $('.boxN').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  $('.answer42').click(function() {
  $('.boxN').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2

    }else{
      player = player1
    }
  });
});
//<--end of N-->
  $('.answer43').click(function() {
  $('.boxO').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer44').click(function() {
  $('.boxO').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer45').click(function() {
  $('.boxO').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
//<--end of O-->
  $('.answer46').click(function() {
  $('.boxP').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer47').click(function() {
  $('.boxP').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer48').click(function() {
  $('.boxP').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint()
    }
  });
//<--end of P-->
  $('.answer49').click(function() {
  $('.boxQ').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer50').click(function() {
  $('.boxQ').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer51').click(function() {
  $('.boxQ').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
//<--end of Q-->
  $('.answer52').click(function() {
  $('.boxR').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer53').click(function() {
  $('.boxR').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer54').click(function() {
  $('.boxR').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  //<--end of R-->
  $('.answer55').click(function() {
  $('.boxS').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer56').click(function() {
  $('.boxS').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer57').click(function() {
  $('.boxS').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
//<--end of S-->
  $('.answer58').click(function() {
  $('.boxT').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer59').click(function() {
  $('.boxT').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer60').click(function() {
  $('.boxT').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
//<--end of T-->
  $('.answer61').click(function() {
  $('.boxU').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer62').click(function() {
  $('.boxU').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer63').click(function() {
  $('.boxU').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
//<--end of U-->
  $('.answer64').click(function() {
  $('.boxV').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer65').click(function() {
  $('.boxV').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer66').click(function() {
  $('.boxV').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
//<--end of V-->
  $('.answer67').click(function() {
  $('.boxW').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer68').click(function() {
  $('.boxW').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer69').click(function() {
  $('.boxW').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
//<--end of W-->
  $('.answer70').click(function() {
  $('.boxX').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer71').click(function() {
  $('.boxX').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer72').click(function() {
  $('.boxX').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
//<--end of X-->
$('.answer73').click(function() {
  $('.boxY').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer74').click(function() {
  $('.boxY').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer75').click(function() {
  $('.boxY').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
//<--end of Y-->
  $('.answer76').click(function() {
  $('.boxZ').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });
  $('.answer77').click(function() {
  $('.boxZ').slideUp(2000)
    answerCorrect = true
    if(player == player1){
      player1.gainedPoint();
    }else{
      player2.gainedPoint();
    }
  });
  $('.answer78').click(function() {
  $('.boxZ').slideUp(2000)
    answerCorrect = false
    if(player == player1){
        player = player2
    }else{
      player = player1
    }
  });






//start of trivia questions
function trivia(){
var questions = Math.random()
console.log(questions)
//box A
if(questions <= 0.038){
  $('.boxA').slideDown(2000)

}else if(questions <= 0.076){
  $('.boxB').slideDown(2000)

}else if(questions<= 0.114){
  $('.boxC').slideDown(2000)

}else if(questions <= 0.19){
  $('.boxD').slideDown(2000)

}else if(questions <= 0.228){
  $('.boxE').slideDown(2000)

}else if(questions <= 0.226){
  $('.boxF').slideDown(2000)

}else if(questions <= 0.304){
  $('.boxG').slideDown(2000)

}else if(questions <= 0.342){
  $('.boxH').slideDown(2000)

}else if(questions <= 0.38){
  $('.boxI').slideDown(2000)

}else if(questions <= 0.418){
  $('.boxJ').slideDown(2000)

}else if(questions <= 0.456){
  $('.boxK').slideDown(2000)

}else if(questions <= 0.494){
  $('.boxL').slideDown(2000)

}else if(questions <= 0.532){
  $('.boxM').slideDown(2000)

}else if(questions <= 0.57){
  $('.boxN').slideDown(2000)
}else if(questions <= 0.608){
  $('.boxO').slideDown(2000)

}else if(questions <= 0.646){
  $('.boxP').slideDown(2000)

}else if(questions <= 0.684){
  $('.boxQ').slideDown(2000)

}else if(questions <= 0.722){
  $('.boxR').slideDown(2000)

}else if(questions <= 0.76){
  $('.boxS').slideDown(2000)
}else if(questions <= 0.798){
  $('.boxT').slideDown(2000)

}else if(questions <= 0.836){
  $('.boxU').slideDown(2000)

}else if(questions <= 0.874){
  $('.boxV').slideDown(2000)

}else if(questions <= 0.912){
  $('.boxW').slideDown(2000)

}else if(questions <= 0.988){
  $('.boxX').slideDown(2000)
}else if(questions <= 1.026){
  $('.boxY').slideDown(2000)

}else if(questions <= 1.064){
  $('.boxZ').slideDown(2000)
}
}

//this is where i hide the question box
$('.boxA').hide()
$('.boxB').hide()
$('.boxC').hide()
$('.boxD').hide()
$('.boxE').hide()
$('.boxF').hide()
$('.boxG').hide()
$('.boxH').hide()
$('.boxI').hide()
$('.boxJ').hide()
$('.boxK').hide()
$('.boxL').hide()
$('.boxM').hide()
$('.boxN').hide()
$('.boxO').hide()
$('.boxP').hide()
$('.boxQ').hide()
$('.boxR').hide()
$('.boxS').hide()
$('.boxT').hide()
$('.boxU').hide()
$('.boxV').hide()
$('.boxW').hide()
$('.boxX').hide()
$('.boxY').hide()
$('.boxZ').hide()




//END OF CODE































