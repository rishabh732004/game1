let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choices")

function getcomputerchoice(){
  const options= ["rock","paper","scissor"];
  const RandChoice= Math.floor(Math.random()*3);
  return options[RandChoice];
  
}

function GetUserChoice()=>{


}

getcomputerchoice();


