//function for the computer to pick a move
function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove ='';

    if(randomNumber >= 0 && randomNumber <1/3){
        computerMove= 'rock';
    }else if(randomNumber >=1/3 && randomNumber < 2/3){
        computerMove= 'paper';
    }else if(randomNumber >=2/3 && randomNumber <1){
        computerMove= 'scissors';
    }

    return computerMove;
}

//function to decide the result
function playGame(playermove){
    //call the function to compute the move and save it in a variable
    const computerMove = pickComputerMove();
    let result = '';

    if(playermove === 'scissors'){
        if(computerMove === 'rock'){
            result='You Lose';
        }else if(computerMove === 'paper'){
            result='You Win';
        }else if(computerMove === 'scissors'){
            result='Tie';
        }
    }else if(playermove === 'paper'){
        if(computerMove === 'rock'){
            result='You Win';
        }else if(computerMove === 'paper'){
            result='Tie';
        }else if(computerMove === 'scissors'){
            result='You Lose';
        }
    }else if(playermove === 'rock'){
        if(computerMove === 'rock'){
            result='Tie';
        }else if(computerMove === 'paper'){
            result='You Lose';
        }else if(computerMove === 'scissors'){
            result='You win';
        }
    }


    alert(`You picked ${playermove}. Computer Picked ${computerMove}. ${result}`)
}