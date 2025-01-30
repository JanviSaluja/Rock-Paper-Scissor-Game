// In order to save the scores from the previous games the object needs 
// to be declared outside the function use JSON and localStorage for this
// if the data retrieved is null then the string takes the given value
let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
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
    
    //save the score using the localStorage to store the scores permanently
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();
    //call the function to update the score
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playermove}-emoji.png"> <img src="images/${computerMove}-emoji.png"> Computer`;

}

//create a function to update the score 
function updateScoreElement(){
    //DOM selector to display the scores in the main screen
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}
//to reset the score remove the string from the localstorage
function reset(){
    score.wins =0;
    score.losses =0;
    score.ties =0;
    localStorage.removeItem('score');
    updateScoreElement();
}

//to autoplay
let isAutoPlaying=false;
let intervalID;
function autoplay(){
    if(!isAutoPlaying){
        intervalID = setInterval(function(){
            const playermove=pickComputerMove();
            playGame(playermove);
        },1000)
        isAutoPlaying=true;
        document.querySelector('.auto-js').innerHTML="Stop Play";
    }else{
        clearInterval(intervalID);
        isAutoPlaying=false;
        document.querySelector('.auto-js').innerHTML="Auto Play";
    }
    
}