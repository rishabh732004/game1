
const choices=document.querySelectorAll(".choice");

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
  console.log("user choice is",userChoice);
const compChoice=getcompchoice();
console.log("computer choice is",compChoice);
}
playGame()
 