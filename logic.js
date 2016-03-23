

$(".btn").click(function() {
  spinner();
});

function spinner(){
var number = Math.random()

if(number <= 0.198){
  console.log("spot1")
  console.log("red")
  $(".red").addClass('changered')

}else if(number <= 0.396){
  console.log("spot2")
  console.log("blue")
  $(".blue").addClass('changeblue')
}else if(number <= 0.594){
  console.log("spot3")
  console.log("green")
  $(".green").addClass('changegreen')
}else if(number <= 0.792){
  console.log("spot4")
  console.log("purple")
  $(".purple").addClass('changepurple')
}else{
  console.log("spot5")
  console.log("pink")
  $(".pink").addClass('changepink')
}
console.log(number)
};

