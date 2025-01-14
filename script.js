//declaring an object to maintain the score
// In order to save the scores from the previous games the object needs 
// to be declared outside the function
let score={
    wins : 0,
    losses : 0,
    ties : 0
};

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
            result='You Win';
        }

    }
    //write an if statement block to count the number of each results
    if(result === 'You Win'){
        score.wins += 1;
    }else if(result === 'You Lose'){
        score.losses += 1;
    }else if(result==='Tie'){
        score.ties += 1;
    }

    alert(`You picked ${playermove}. Computer Picked ${computerMove}. ${result}
Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`)
}

//function to reset the score to 0
function reset(){
    score.wins =0;
    score.losses = 0;
    score.ties = 0;
}