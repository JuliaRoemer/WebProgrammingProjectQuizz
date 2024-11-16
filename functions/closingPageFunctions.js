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
    createConfettiPiece();
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
document.head.appendChild(style);