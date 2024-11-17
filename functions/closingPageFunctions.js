// Get the number of questions from the URL
const numOfCorrectAnswers = getQueryParam('correct');

// Display the selected number of questions or default to 10 if not set
if (numOfCorrectAnswers) {
    console.log(`Number of questions selected: ${numOfCorrectAnswers}`);
    // Use `numQuestions` to load the appropriate number of questions
} else {
    console.log("No correct Answers");
}
console.log("# correct answers: ", numOfCorrectAnswers);
    const correctAnswersElement = document.getElementById("correct-answers"); // Update the content of the element with the value of numCorrect 
    correctAnswersElement.textContent = numOfCorrectAnswers;

// Countdown timer
let countdown = 10;
const countdownElement = document.getElementById('countdown');
const interval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(interval);
        window.location.href = 'StartPage.html';
    }
}, 1000);
// get correct answers
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}



// Confetti effect
function createConfettiPiece() {
    const confettiPiece = document.createElement('div');
    confettiPiece.style.position = 'absolute';
    confettiPiece.style.width = '10px';
    confettiPiece.style.height = '10px';
    confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confettiPiece.style.top = '-10px';
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    document.getElementById('confetti').appendChild(confettiPiece);

    confettiPiece.addEventListener('animationend', () => {
        confettiPiece.remove();
    });
}

setInterval(() => {
    if (numOfCorrectAnswers > 0) {
        createConfettiPiece();
    }
}, 100);

// Add CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
//document.getElementById("correct-answers").innerHTML = `You have ${numOfCorrectAnswers} questions answered correctly!`
document.head.appendChild(style);