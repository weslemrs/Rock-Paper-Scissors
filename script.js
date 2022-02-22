let playerSelection = ""
let computerSelection = ""

for(let i=0;i<5;i++){
    playRound(playerPlay(), computerPlay());
}


function playerPlay(){
    let imput = window.prompt("Vamos jogar Joquenpô: 1 = Pedra, 2 = Papel,  3 = Tesoura.")
    //console.log(`imput = ${imput}`)
    
    while(imput=='' || imput<1 || imput>3){
        imput = window.prompt("Coloque um número válido: 1 = Pedra, 2 = Papel,  3 = Tesoura.")
    }
    if(imput == 1){
        playerSelection="rock";
    }
    if(imput == 2){
        playerSelection="paper";
    }
    if(imput == 3){
        playerSelection="scissor";
    }
    console.log(`player = ${playerSelection}`)
    return playerSelection;
}

function computerPlay(){
    //Numero entre 1 e 3
    let random = Math.floor(Math.random()*3)+1;
    //console.log(`random = ${random}`)
    if(random == 1){
        computerSelection="rock";
    }
    if(random == 2){
        computerSelection="paper";
    }
    if(random == 3){
        computerSelection="scissor";
    }
    console.log(`computer = ${computerSelection}`)
    return computerSelection;
}

function playRound(playerSelection,computerSelection){

    let num = 0 // 0 computador ganha

    if(computerSelection=="rock" && playerSelection=="paper"){
        num = 1;
    } else if(computerSelection=="paper" && playerSelection=="scissor"){
        num = 1;
    } else if(computerSelection=="scissor" && playerSelection=="rock"){
        num = 1;
    }


    if(computerSelection==playerSelection){
        console.log("Vocês emparatam")
    }
    else if (num == 1){
        console.log(`Parabéns você ganhou com ${playerSelection} contra ${computerSelection} do computador`);
    } else {
        console.log(`Xii, o computador ganhou com ${computerSelection} contra sua escolha que foi ${playerSelection}`)
    }

    num=0;

}


