

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

function trivia(){
var questions = Math.random()
console.log(questions)

if(questions <= 0.198){
  prompt("how old are you?")
}else if(questions <= 0.396){
  prompt("your name is?")

}else if(questions<= 0.594){
  prompt("are you hungry?")

}else if(questions <= 0.792){
  prompt("are you sure?")
}else{
  prompt("riddle")
}
}

