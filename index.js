let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choices");

function getcomputerchoice(){
  const options= ["rock","paper","scissor"];
  const RandChoice= Math.floor(Math.random()*3);
  return options[RandChoice];
  
};

 function getUserChoice(){
  choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id");
    
    })
  })
  
  function draw(){
    console.log("draw")
  }
 };
function PlayGame(options,userChoice){
 if (options===userChoice){
   draw();
 }
 else {
  let userwin;
   if(userChoice==="rock"){
    userwin= options=== "paper"? false :true;
   } 
   else if(userChoice==="paper"){
    userwin= options=== "scissor"?true: false;
   }
   else{
     userwin= options==="rock"? true:false;
   }
 }

 function winner(){
  getcomputerchoice();
  getUserChoice();
  PlayGame(options,userChoice);
  console.log(userwin)
 }
};

getcomputerchoice();
getUserChoice();

 