let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#userScore");
const compScore=document.querySelector("#compScore");


const getcompchoice=()=>{
  const options=["rock","paper","scissor"];
  const randIdx= Math.floor(Math.random()*3);
  return options[randIdx];
}


choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
const userChoice= choice.getAttribute("id");
playGame(userChoice);
})
})


const playGame=(userChoice)=>{
const compChoice=getcompchoice();

if(userChoice===compChoice){
    msg.innerText="GAME DRAW";
    msg.style.backgroundColor="yellow";
    
    
}
else{
  let userWin=true;
  if (userChoice==="rock"){
   userWin= compChoice==="paper"? false:true;
  }
  else if(userChoice==="paper"){
   userWin= compChoice==="scissor"? false: true;
  }
  else{
    userWin= compChoice==="rock"? false:true;
  }
  showWinner(userWin);
}

}


const showWinner=(userWin)=>{

  if (userWin===true){
    user_score++;
    userScore.innerText=user_score;
    console.log("you win")

    msg.innerText="YOU WIN";
    msg.style.backgroundColor= "green";
    

  }
  else{
    console.log("you lose");
    comp_score++;
    compScore.innerText= comp_score;
    msg.innerText="YOU LOSE";
    msg.style.backgroundColor="red";
    
  }
}



 