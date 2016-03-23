


$(".btn").click(function() {
  spinner();
});

function spinner(){
var number = Math.random()

if(number <= 0.198){
  console.log("spot1")

}else if(number <= 0.396){
  console.log("spot2")
}else if(number <= 0.594){
  console.log("spot3")
}else if(number <= 0.792){
  console.log("spot4")
}else{
  console.log("spot5")
}
console.log(number)
};
