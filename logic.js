

$(".btn").click(function() {
  spinner();
});

function spinner(){
var number = Math.random()
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



var answerLaugh;

function trivia(){
var questions = Math.random()
console.log(questions)

if(questions <= 0.038){
   //answerLaugh = prompt("The average person does what thirteen times a day?")
  $('.boxA').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxA').slideUp(2000)
  });

}else if(questions <= 0.076){
 // prompt("your name is?")
  $('.boxB').slideDown(2000)
  $('.answerC').click(function() {
  $('.boxB').slideUp(2000)
  });

}else if(questions<= 0.114){

  $('.boxC').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxC').slideUp(2000)
  });
}else if(questions <= 0.19){

  $('.boxD').slideDown(2000)
  $('.answerA').click(function() {
  $('.boxD').slideUp(2000)
  });
}else if(questions <= 0.228){

  $('.boxE').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxE').slideUp(2000)
  });
}else if(questions <= 0.226){

  $('.boxF').slideDown(2000)
  $('.answerA').click(function() {
  $('.boxF').slideUp(2000)
  });
}else if(questions <= 0.304){

  $('.boxG').slideDown(2000)
  $('.answerA').click(function() {
  $('.boxG').slideUp(2000)
  });
}else if(questions <= 0.342){

  $('.boxH').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxH').slideUp(2000)
  });
}else if(questions <= 0.38){

  $('.boxI').slideDown(2000)
  $('.answerC').click(function() {
  $('.boxI').slideUp(2000)
  });
}else if(questions <= 0.418){

  $('.boxJ').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxJ').slideUp(2000)
  });
}else if(questions <= 0.456){

  $('.boxK').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxK').slideUp(2000)
  });
}else if(questions <= 0.494){

  $('.boxL').slideDown(2000)
  $('.answerA').click(function() {
  $('.boxL').slideUp(2000)
  });
}else if(questions <= 0.532){

  $('.boxM').slideDown(2000)
  $('.answerC').click(function() {
  $('.boxM').slideUp(2000)
  });
}else if(questions <= 0.57){

  $('.boxN').slideDown(2000)
  $('.answerA').click(function() {
  $('.boxN').slideUp(2000)
  });
}else if(questions <= 0.608){

  $('.boxO').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxO').slideUp(2000)
  });
}else if(questions <= 0.646){

  $('.boxP').slideDown(2000)
  $('.answerC').click(function() {
  $('.boxP').slideUp(2000)
  });
}else if(questions <= 0.684){

  $('.boxQ').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxQ').slideUp(2000)
  });
}else if(questions <= 0.722){

  $('.boxR').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxR').slideUp(2000)
  });
}else if(questions <= 0.76){

  $('.boxS').slideDown(2000)
  $('.answerA').click(function() {
  $('.boxS').slideUp(2000)
  });
}else if(questions <= 0.798){

  $('.boxT').slideDown(2000)
  $('.answerA').click(function() {
  $('.boxT').slideUp(2000)
  });
}else if(questions <= 0.836){

  $('.boxU').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxU').slideUp(2000)
  });
}else if(questions <= 0.874){

  $('.boxV').slideDown(2000)
  $('.answerC').click(function() {
  $('.boxV').slideUp(2000)
  });
}else if(questions <= 0.912){

  $('.boxW').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxW').slideUp(2000)
  });
}else if(questions <= 0.988){

  $('.boxX').slideDown(2000)
  $('.answerC').click(function() {
  $('.boxX').slideUp(2000)
  });
}else if(questions <= 1.026){

  $('.boxY').slideDown(2000)
  $('.answerA').click(function() {
  $('.boxY').slideUp(2000)
  });
}else if(questions <= 1.064){

  $('.boxZ').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxZ').slideUp(2000)
  });
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
