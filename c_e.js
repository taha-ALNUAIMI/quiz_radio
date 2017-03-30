var qn=0;
var sum_q=0;
var score=0;
var answer="";
var questions=[
    ["- j'ai invité mon frère à diner ce soir.","- Je vais préparer un poulet à la libanaise. Tu lui as dit … venir à quelle heure ?","",["A. à","B. en","C. de","D. pour"],"A"],
    ["- tu as déjà essayé le club de sport de la rue Diderot ?","- J'y suis allée la semaine dernière. Le personale est adorable. Si avis vu comment ils m'ont... !","",["A. réceptionnée.","B. hébergée.","C. accueillie.","D. invitée."],"A"],
    ["- je suppose aue Sylvie ne vient pas avec nous ?","- Et toi, comme d'habitude ! Elle habite à coté de la gare et en face d'un arret de bus, … elle fait toujours des histoires pour venir en ville.","",["A. bien qu'","B. quoique","C. malgré","D. pourtant"],"A"],
    ["- comment vont le Durand ?","- Pas tres fort. Le restaurant a du mal à démarrer. Ils tirent le diable par la queue !","Que signifie l'expression tirer le diable par la queue ?",["A. ils n'arrivent pas à s'en sortir.","B. il ne souhitent pas étre aidès.","C. ils font sans cesse des histoires.","D. ils ne désirent pas nous en parler."],"A"],
];

populate();


function populate(){
        if(qn<questions.length){
        
        for (var i=0;i<3;i++){document.getElementById("conv"+i).innerHTML=questions[qn][i];}
        for (var j=0;j<4;j++){
                document.getElementById("r"+j).checked=false;
                document.getElementById("ch"+j).innerHTML=questions[qn][3][j];
                document.getElementById("ch"+j).style.background="#778897";
                }
        
        document.getElementById("r0").addEventListener('click',function() {var a="0"; setValue(a);});
        document.getElementById("r1").addEventListener('click',function() {var a="1"; setValue(a);});
        document.getElementById("r2").addEventListener('click',function() {var a="2"; setValue(a);});
        document.getElementById("r3").addEventListener('click',function() {var a="3"; setValue(a);});
        document.getElementById("btn_next").onclick=function(){ checkAnswer(); answer=""; qn++; populate();};
        showProgress();
        }else{
                                
                                document.getElementById("progress").style.visibility="hidden";
                                document.getElementById("btn_next").style.visibility="hidden";
                                document.getElementById("form2").style.visibility="hidden";
                                var gameoverHTML="<h1>result<h1>";
                                gameoverHTML+="<h2 >your scorses "+ score +"  from  "+sum_q+"</h2>";
                                 gameoverHTML+="<h2 >number of questions "+ questions.length+"</h2>";
                                var element=document.getElementById("form1");
                                element.innerHTML=gameoverHTML;
        }
}

function setValue(a){
                answer=document.getElementById("ch"+a).innerHTML;
                for (var j=0 ;(j<4); j++){
                if (j!=a){document.getElementById("ch"+j).style.background="#778897";
              
                }else {document.getElementById("ch"+j).style.background="red";}
                }
        }
function checkAnswer(){sum_q++; if (answer===questions[qn][4]){score++;}}
function showProgress(){
                var currentQuestionNumber=qn+1;
                var element= document.getElementById("progress");
                element.innerHTML= "Question "+ currentQuestionNumber + "of "+questions.length;
}