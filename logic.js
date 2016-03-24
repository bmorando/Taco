

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

if(questions <= 0.198){
   //answerLaugh = prompt("The average person does what thirteen times a day?")
  $('.boxA').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxA').slideUp(2000)
  });

}else if(questions <= 0.396){
 // prompt("your name is?")
  $('.boxB').slideDown(2000)
  $('.answerC').click(function() {
  $('.boxB').slideUp(2000)
  });

}else if(questions<= 0.594){


  $('.boxC').slideDown(2000)
  $('.answerB').click(function() {
  $('.boxC').slideUp(2000)
  });

answer1()
}else if(questions <= 0.792){
  //prompt("are you sure?")
}else{
  //prompt("riddle")
}
}

// function answer1() {
// var userAnswer;
// console.log("hi")

// if(answerLaugh === "laugh"){
// console.log("you are 21 coooooooooool")
// }else if (answerhungry === "pizza"){
// console.log("ewww thats gross!!!")
// }
// }


//this is where i hide the question box
$('.boxA').hide()
//END OF CODE
$('.boxB').hide()
$('.boxC').hide()

