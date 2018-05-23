var timer = 15;
var otherTimer=4;
var rightCounter=0;
var wrongCounter=0;
var pause=false;
var cualva=0;
var questionIndex = 0;
const questions = ["WHICH ONE OF THESE IS NOT A PUBLIC INN IN MIDDLE-EARTH?", "WHO PARTICIPATED IN THE BATTLE OF ISENGARD?"];
const rightAnswers = ["The Southern Star", "Saurumon’s forces versus the Ents."];
const worngAnswers = [ ["The Green Dragon", "The Prancing Pony"], ["Orcs of Dol Guldur versus the Galadhrim of Lothlórien.", "The forces of the Dark Lord Sauron versus the forces of Gondor."]];


function start()  {
    document.getElementById("startButton").hidden=true;
    showQuestion();
    window.setInterval(function() {
        if (!pause) {
            timer--;
            document.getElementById("timer").innerHTML = timer;

            if (timer == 0) {
                //window.alert("Se terminoooo");
                //pause = true;
                showQuestion();
            }
        }

    }, 1000);
};


function timeOver()  {
    document.getElementById("questions").innerHTML = ("Time's Up!");
}

//Put the change logic question logic here!
function showQuestion() {
    
    if (questionIndex >= questions.length) {
        questionIndex = 0;
        
    } 
    resetTimer();
    const currQuestion = questions[questionIndex];
    let answers = "<ul>";
    document.getElementById("questions").innerHTML = "<p>" + currQuestion + "</p>";

    worngAnswers[questionIndex].forEach(function(answer) {

        answers += "<li onclick='wrong()'>" + answer + "</li>";
    });

    answers += "<li onclick='correct()'>" + rightAnswers[questionIndex] + "</li>";

    document.getElementById("answers").innerHTML = answers;
    questionIndex++;
}

function correct(){
    document.getElementById("questions").innerHTML = "<p>" + "Correct!" + "</p>";
    document.getElementById("answers").innerHTML = "";
    toggle(true);
}

function wrong(){
    document.getElementById("questions").innerHTML = "<p>" + "Wrong" + "</p>";
    document.getElementById("answers").innerHTML = "";
    toggle(true);
}

function toggle(flag){
    resetTimer(4);
    if(flag){
        document.getElementById("timer").style.visibility = "inline";
    }
    else{
        document.getElementById("timer").style.visibility = "inline";
    }
   
}
/*function correct(){
    
    answered=true;
    if(cualva>=questions.length-1){
        rightCounter++;
        document.getElementById("counters").innerHTML="<p> You got "+rightCounter+" questions right!</p><br>";
        document.getElementById("counters").innerHTML+="<p> You got "+wrongCounter+" questions wrong!</p><br>";
    }
    else{
        document.getElementById("counters").innerHTML="<p>Correct</p><br>";
        rightCounter++;
    }
    clearTimeout(timeOutID);
}

function wrong(){
    answered=true;
    if(cualva>=questions.length-1){
        wrongCounter++;
        document.getElementById("counters").innerHTML="<p> You got "+rightCounter+" questions right!</p><br>";
        document.getElementById("counters").innerHTML+="<p> You got "+wrongCounter+" questions wrong!</p><br>";
    }
    else{
        document.getElementById("questions").innerHTML="<p>Wrong!</p><br>";
        wrongCounter++;
    }
}*/

function resetTimer(t = 15) {
    timer = t;
}

function gameOver (){

    
}



/*var question1 = ["q1","q2"];
var wrongAnswers = [["a","b","c"],["a","b","c"]];
var rightAnswers =["a1","a2"];
var rightCounter=0;
var wrongCounter=0;
var cualva=0;
var time=0;
var answered=false;
var timeOutID = 0;


function start()  {
    document.getElementById("startButton").hidden=true;
    console.log(question1.length);
    //loop with questions
    for (i=0;i<question1.length;i++){

        (function(i){
            
        timeOutID=window.setTimeout(function(){
            cualva=i;
            
            getQuestion(question1[i],wrongAnswers[i],rightAnswers[i]);
           
         /*document.getElementById("timer").innerHTML = document.getElementById("timer").innerHTML + i.toString();*/
            /*}, i*30000);

        

          }(i));
    }
    
}

function getQuestion(question, wrongs, right){
    var answers="";
    document.getElementById("questions").innerHTML="<p>"+question+"</p><br>";
    randomNum=Math.floor(Math.random() * 3);

    for (i=0;i<wrongs.length;i++){

        if(randomNum==i){
        answers+="<p onclick=\"correct()\">"+right+"</p><br>";
        }
        answers+="<p onclick=\"wrong()\">"+wrongs[i]+"</p><br>";
        
    }
    if(randomNum==3){
        answers+="<p onclick=\"correct()\">"+right+"</p><br>";  
        }
    document.getElementById("questions").innerHTML+=answers;
}

function correct(){
    
    answered=true;
    if(cualva>=question1.length-1){
        rightCounter++;
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        document.getElementById("questions").innerHTML="<p> You got "+rightCounter+" questions right!</p><br>";
        document.getElementById("questions").innerHTML+="<p> You got "+wrongCounter+" questions wrong!</p><br>";
    }
    else{
        document.getElementById("questions").innerHTML="<p>Correct</p><br>";
        rightCounter++;
    }
    clearTimeout(timeOutID);
}

function wrong(){
    answered=true;
    if(cualva>=question1.length-1){
        wrongCounter++;
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        document.getElementById("questions").innerHTML="<p> You got "+rightCounter+" questions right!</p><br>";
        document.getElementById("questions").innerHTML+="<p> You got "+wrongCounter+" questions wrong!</p><br>";
    }
    else{
        document.getElementById("questions").innerHTML="<p>Wrong!</p><br>";
        wrongCounter++;
    }
    clearTimeout(timeOutID);*/
/*}*/
