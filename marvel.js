

var readlineSync = require("readline-sync");

 var score = 0;

var highScores = [

  {

    name: "vicky",

    score: 3,

  },

  {

    name: "vivi",

    score: 2,

  },

]

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

},{question:"what is the iron man real name?",

  answer:"Rdj"}]

function game() {

  for (var i=0; i<questions.length; i++) {

    var currentQuestion = questions[i];

    play(currentQuestion.question, currentQuestion.answer)

  }

}

function showScores() {

  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))

}

game();

showScores();













   
























