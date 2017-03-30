
//var ff=[new Question("question 1",["A","B","C","D"],"C")];
var qn=0;
var ch=0;
var score=0;
var questions=[
    ["images/1.jpg",["sss","B","C","D"],"A","audio/1.mp3"],
    ["question 2",["A2","B2","C2","D2"],"A2"],
    ["question 3",["A3","B3","C3","D3"],"A3"],
    ["question 4",["A4","B4","C4","D4"],"A4"]
];


populate();


function populate(){
        if(qn<4){
                showProgress();
                document.getElementById("imageid").src=questions[qn][0];
                
                //document.getElementById("question").innerHTML=questions[qn][0];
                document.getElementById("choice"+0).innerHTML=questions[qn][1][0];
                document.getElementById("choice"+1).innerHTML=questions[qn][1][1];
                document.getElementById("choice"+2).innerHTML=questions[qn][1][2];
                document.getElementById("choice"+3).innerHTML=questions[qn][1][3];
                
                             
                bb0=document.getElementById("btn"+0);
                bb1=document.getElementById("btn"+1);
                bb2=document.getElementById("btn"+2);
                bb3=document.getElementById("btn"+3);
                //showProgress();
                bb0.onclick=function(){var b=0; check(qn,b); qn++;populate();}
                bb1.onclick=function(){var b=1; check(qn,b); qn++;populate();}
                bb2.onclick=function(){var b=2; check(qn,b); qn++;populate();}
                bb3.onclick=function(){var b=3; check(qn,b); qn++;populate();}
                
                var x=document.getElementById("myAudio");
                x.src=questions[qn][3];
                x.play();
                
}else{
        //the end
        var gameoverHTML="<h1>result<h1>";
        gameoverHTML+="<h2 id='score'>your scorses "+ score +"</h2>";
        var element=document.getElementById("quiz");
        element.innerHTML=gameoverHTML;
}
}

function check(qn,b){
        k=document.getElementById("choice"+b).innerHTML;
        if (k===questions[qn][2]){score++;}
}
function showProgress(){
    var currentQuestionNumber=qn+1;
    var element= document.getElementById("progress");
    element.innerHTML= "Question "+ currentQuestionNumber + "of "+questions.length;
}
    