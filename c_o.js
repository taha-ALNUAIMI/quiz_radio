
//var ff=[new Question("question 1",["A","B","C","D"],"C")];
var qn=0;
var sum_q=0;
var score=0;
var questions=[
    ["",["A","B","C","D"],"A","audio/co1.mp3"],
    ["",["A. Il ne l'apprécie pas.","B. Il pense que c'est dur.","C. il la trouve très difficile.","D. il ne sait pas quoi penser."],"A2","audio/co2.mp3"],
    ["question 3",["A. dans une interview.","B. dans une réunion bilan.","C. dans un entretien d'embauche.","D. dans une négociation professionnelle."],"A3","audio/co3.mp3",["A. car il recherche plus de dynamisme.","B. car il n'aprécie pas son travail actuel.","C. car il n'aime pas le markiting.","D. car il est très combatif."],"A"],
    ["question 4",["A. la maison concurrence l'école car l'apprentissage y est plus facile.","B. on vante ses bienfaits mais l'ecole ne faforise pas le plurilinguisme.","C. l'environement familial va à l'encontre de l'enseignement plurilingue.","D. l'école ne fait pas prendre concience plurilingues de leur richesse."],"A4","audio/co4.mp3",["A. elle nuirair au développement de l'individu.","B. elle devaloriserait l »enseignement du français.","C. elle entrainerait de mauvais résultats scolaires.","D. elle serait néfaste à l'acquisition d'une autre langue."],"A"],
    //["question 5",["A4","B4","C4","D4"],"A4","",["","","",""],""],
    //["question 6",["A4","B4","C4","D4"],"A4","",["","","",""],""],
];

var answer="";
var answer2="";
var j="0";
var first_div=false;

populate();


function populate(){
        if(qn<questions.length){
        document.getElementById("form2").style.visibility="hidden";
        for (var i=0;i<4;i++){
                                aa=document.getElementById("ch"+i);
                                aa.style.background="#778897";
                                aa.innerHTML=questions[qn][1][i];
                                                                
                                if (questions[qn].length>5){
                                        document.getElementById("chh"+i).style.background="#778897";
                                        document.getElementById("form2").style.visibility="visible";
                                        document.getElementById("chh"+i).innerHTML=questions[qn][4][i];
                                        
                                        document.getElementById("rr"+i).checked=false;
                                         }
                                document.getElementById("r"+i).checked=false;
                                }
        document.getElementById("r0").addEventListener('click',function() {var a="0"; setValue(a);});
        document.getElementById("r1").addEventListener('click',function() {var a="1"; setValue(a);});
        document.getElementById("r2").addEventListener('click',function() {var a="2"; setValue(a);});
        document.getElementById("r3").addEventListener('click',function() {var a="3"; setValue(a);});
        document.getElementById("rr0").addEventListener('click',function() {var a="0"; setValue2(a);});
        document.getElementById("rr1").addEventListener('click',function() {var a="1"; setValue2(a);});
        document.getElementById("rr2").addEventListener('click',function() {var a="2"; setValue2(a);});
        document.getElementById("rr3").addEventListener('click',function() {var a="3"; setValue2(a);});
        showProgress();
        var x=document.getElementById("myAudio");
                x.src=questions[qn][3];
                x.play();
        
        document.getElementById("btn_next").onclick=function(){ checkAnswer();
                                                                answer="";
                                                                answer2="";
                                                                qn++; populate();};
        }else{
        //the end
       
                                document.getElementById("form2").style.visibility="hidden";
                                document.getElementById("progress").style.visibility="hidden";
                                document.getElementById("btn_next").style.visibility="hidden";

                                var gameoverHTML="<h1>result<h1>";
                                gameoverHTML+="<h2 >your scorses "+ score +"  from  "+sum_q+"</h2>";
                                 gameoverHTML+="<h2 >number of questions "+ questions.length+"</h2>";
                                var element=document.getElementById("form1");
                                element.innerHTML=gameoverHTML;
                                
                }
}
function checkAnswer(){
         if (questions[qn].length>5){sum_q=sum_q+2;
               if (answer2===questions[qn][5]){score++;}
               if (answer===questions[qn][2]){score++;}
        }else if (questions[qn].length<5){sum_q++;
                if (answer===questions[qn][2]){score++;}
        }
        
         
               
}
function setValue(a){
                answer=document.getElementById("ch"+a).innerHTML;
                for (var j=0 ;(j<4); j++){
                if (j!=a){document.getElementById("ch"+j).style.background="#778897";
              
                }else {document.getElementById("ch"+j).style.background="red";}
                }
        }


function setValue2(a){
                answer2=document.getElementById("chh"+a).innerHTML;
               for (var j=0 ;(j<4); j++){
                if (j!=a){document.getElementById("chh"+j).style.background="#778897";
              
                }else {document.getElementById("chh"+j).style.background="red";}
                }
}
function showProgress(){
                var currentQuestionNumber=qn+1;
                var element= document.getElementById("progress");
                element.innerHTML= "Question "+ currentQuestionNumber + "of "+questions.length;
}