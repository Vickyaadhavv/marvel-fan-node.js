
var readlineSync = require("readline-sync");
 var score = 0;

var username = readlineSync.question("what is your name?");
console.log("welcome" + username + "let's see if you know marvel cinematic universe");

function play(question,answer){
  var useranswer = readlineSync.question(question);
  if (useranswer === answer){
    console.log("right!");
   score = score +1;
  }else{
    console.log("wrong!");
   }
  console.log("current score: "+ score);
  console.log("------------");
}

var questions =[{
  question:'what the full and original name of caption america?',
  answer:"Steve Rogers"
},{
  question:'what is the thor hammer name?',
  answer:"Mjolnir"
},{
 question:'what is the spiderman real name?',
  answer:"peter parker"
},{
  question:"what is the marvel studio first movie?",
  answer:"Iron man"
}]

for(var i= 0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}


