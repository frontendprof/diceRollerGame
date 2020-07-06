// Defining global variables

const output = document.querySelector("#output");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const button = document.querySelector("button");


button.addEventListener("click",()=>{
    console.log("functioning ...");

    let rolls = [roll(6),roll(6)];
    
    let temp;
    if(rolls[0]===rolls[1]){temp="It's a draw";}
    else if(rolls[0]>rolls[1]){temp="Player 1 won";}
    else{temp="Player 2 won";}

    output.innerHTML=temp;
    player1.innerHTML=rolls[0]
    player2.innerHTML=rolls[1]
    console.log(rolls);
    

    
})

const roll = num =>{
    let rNum = Math.floor(Math.random()*num)+1;
    let n=9855+rNum;
    let char="&#"+n+";";


    return rNum+ ""+char;
}