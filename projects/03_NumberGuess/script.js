const rendomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit')
const guessField = document.querySelector('#inputnumber')
const pGuesses = document.querySelector('#preGuess')
const remaining = document.querySelector('#Remaining')
const lowHigh = document.querySelector('p')

let playGame = true
let prevGuess = []
let numGuess = 1

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(guessField.value)
        // console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("plz Enter valid number")
    } else if (guess < 1) {
        alert("plz enter a number more then 1")
    } else if (guess > 100) {
        alert("plz enter a number less then 100")
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMsg("GAME OVER")
            displayMsg(`number was ${rendomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === rendomNumber) {
        displayMsg("you guess it RIGHT")
        endGame()
    } else if (guess < rendomNumber) {
        displayMsg("you guess too LOW")
    } else if (guess > rendomNumber) {
        displayMsg("you guess too HIGH")
    }

}
function displayGuess(guess) {
    guessField.value = ''
    pGuesses.innerHTML += ` ${guess}, `
    numGuess++;
}
function displayMsg(msg) {
lowHigh.innerHTML=`<h2>${msg}</h2>`
}
function endGame(guess) {

}
function newGame(guess) {

}