
const getcompchoice=()=>{
  const options=["rock","paper","scissor"];
  const randIdx= Math.floor(Math.random()*3);
  console.log(randIdx);
  return options[randIdx];
}


 getcompchoice()