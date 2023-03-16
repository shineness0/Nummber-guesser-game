// Game values
var min = 1,
    max = 10,
    winningNum = getRandomNum(min, max);
    userScore = 0;
    guessesLeft = 3;
    extralGuessLeft = 3;


minNum.innerText =  min;
maxNum.innerText =  max;
score.innerText = userScore

function validate() {
    if(guessInput.value < 1 || guessInput.value > 10 || guessInput.value === '') {
        setMessage('Please enter a number between 1 and 10', 'red')
        setTimeout(() => {
            setMessage('','')
        },2000)
    } else {
        if(guessInput.value != winningNum) {
            if(guessesLeft -1 == 0) {
                gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
            } else {
                guessesLeft -= 1
                setMessage(`${guessInput.value} is not correct you have ${guessesLeft} guesses left`, 'red')
                guessInput.value = ''
            }
        } else {
            userScore += 1
            setMessage(`${winningNum} is Correct, YOU WIN!`, 'green')
            guessInput.value = ''
            score.innerText = userScore
            winningNum = getRandomNum(min, max);
            if(guessesLeft === 1) {
                guessesLeft = extralGuessLeft + guessesLeft;
            } else if(guessesLeft === 2) {
                guessesLeft = extralGuessLeft - 1 + guessesLeft;
            } else if(guessesLeft >= 5) {
                guessesLeft = extralGuessLeft - 2 + guessesLeft;
            }
        }
    }
}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red'
       // Disable input
  guessInput.disabled = true;
  // Change brder color 
  guessInput.style.borderColor = color;
  // Change text color
  alertMsg.style.color = color;
  // Set message
  setMessage(msg)

  // play again
  btnGroup.innerHTML = `<button class="btn w-100 btn-outline-primary" id="guessBtn" onclick="window.location.reload()">Play Again</button>`

  }


function setMessage(message, color) {
    alertMsg.style.color = color;
    alertMsg.innerText = message;
}

   // Get winning number
function getRandomNum(min, max){
    return  Math.floor(Math.random()*(max-min+1)+min)
}


    