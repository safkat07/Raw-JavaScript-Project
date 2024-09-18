let randomNumber = parseInt(Math.random() * 100 + 1);

//all selectors

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}



const validateGuess = (guess) => {
    //
    if (isNaN(guess)) {
        alert('Enter a valid number')
    }
    else if (guess < 1) {
        alert('Enter bigger then 1')
    }
    else if (guess > 100) {
        alert('Enter Less then 100')
    } else {
        prevGuess.push(guess)
        if (numGuess >= 10) {
            guessDsiplay(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame()
        }
        else {
            guessDsiplay(guess)
            checkGuess(guess)
        }
    }

}


const checkGuess = (guess) => {
    //

    if (guess === randomNumber) {
        displayMessage(`Your guess is write`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is too High`);
    }

}


const guessDsiplay = (guess) => {
    //
    userInput.value = ''
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}



const displayMessage = (message) => {
    //
    lowOrhi.innerHTML = `<h2>${message}</h2>`

}

const endGame = () => {
    //
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id = 'newGame'>Start New Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

const newGame = () => {
    //
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        newGame = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild('p')
        playGame = true
    })
}
