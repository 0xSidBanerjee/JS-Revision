// Generate a random number between 1-100
const num= parseInt(Math.random()*100 +1);
const submit = document.querySelector("#subt")
const guesses=[];
let canPlay=true;
// start a listen event whenever the form gets submitted
    submit.addEventListener('click', (event)=>{
        if (canPlay){  // How to disable the button after it reaches 0 or guessed it correctly?
            event.preventDefault();
            const predictedNum= document.querySelector("#guessField").value;
            checkNumber(predictedNum);
            console.log(predictedNum);
        }
    })

// a function to check the input is a number between 1-10
function checkNumber(predictedNum){
    if (predictedNum<=0 || predictedNum>100 || isNaN(predictedNum) || predictedNum==''){
        alert("Enter a valid number between 1-100");
    }
    else{
        compare(predictedNum);
    }
}

// a function to compare the input and the random number 
function compare(predictedNum){
    if (predictedNum==num){
        document.querySelector('.lowOrHi').innerHTML='Correct'
        updateNumbers(predictedNum);
        restartGame();
    }
    else if(predictedNum>num){
        document.querySelector('.lowOrHi').innerHTML='Try Lower'
        updateNumbers(predictedNum);
    }
    else{
        document.querySelector('.lowOrHi').innerHTML='Try Higher'
        updateNumbers(predictedNum);
    }
}

// add number to the array and reduce the count
function updateNumbers(predictedNum){
    guesses.push(predictedNum);
    document.querySelector('.guesses').innerHTML=guesses;
    document.querySelector('.lastResult').innerHTML-=1;
    if (document.querySelector('.lastResult').innerHTML<=0){
        restartGame();
    }
}

//should disable the button if number of attempts have ended or the guess is correct
function restartGame(){
    canPlay=false;
    document.querySelector('#subt').style.backgroundColor='grey';
}