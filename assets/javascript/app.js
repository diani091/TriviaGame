var question1 = ["q1","q2"];
var wrongAnswers = [["a","b","c"],["a","b","c"]];
var rightAnswers =["a1","a2"];
var rightCounter=0;
var wrongCounter=0;
var cualva=0;
var time=0;
var answered=false;


function start()  {
    document.getElementById("startButton").hidden=true;
    console.log(question1.length);
    //loop with questions
    for (i=0;i<question1.length;i++){

        (function(i){
            
        window.setTimeout(function(){
            cualva=i;
            
            getQuestion(question1[i],wrongAnswers[i],rightAnswers[i]);
            if(answered== false){
                wrongCounter++;
            }
            else{
                answered==false;
            }

         /*document.getElementById("timer").innerHTML = document.getElementById("timer").innerHTML + i.toString();*/
            }, i*30000);

        

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
}



