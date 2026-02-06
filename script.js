const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.yes-btn');
const questionText = document.getElementById('question');
const imageArea = document.querySelector('.image-area');
const questionArea = document.querySelector('.question-area');
const successMessage = document.getElementById('success-message');
const body = document.querySelector('body');

// Jokes and references from your chat
const texts = [
    "Are you sure, Kitty? 😿",
    "Don't be an acquaintance! 🐻",
    "I'll set your fielding! 😤",
    "Aren't you proud of Raj(poot)! 💛",
    "Do you want to go back to Nanoship?",
    "But my Aura will go minus! 📉",
    "Don't make me call back that Aunty! 📞",
    "I'll cry in the corner! 😭",
    "Are you really sure? (Secretly?)",
    "Just click Yes, Cutonic! 💅"
];

let clickCount = 0;

function moveButton() {
    // Make the Yes button grow
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.2}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) * 1.2}px ${parseFloat(window.getComputedStyle(yesBtn).paddingRight) * 1.2}px`;

    // Change the No button text
    if (clickCount < texts.length) {
        noBtn.innerText = texts[clickCount];
        clickCount++;
    } else {
        noBtn.innerText = "Okay, I'm hiding! 🙈";
        noBtn.style.opacity = "0"; // Make it disappear eventually
    }

    // Move the button randomly within the container
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Ensure it doesn't go off screen
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.min(Math.max(0, x), window.innerWidth - 150)}px`;
    noBtn.style.top = `${Math.min(Math.max(0, y), window.innerHeight - 50)}px`;
}

function acceptLove() {
    imageArea.classList.add('hidden');
    questionArea.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Create heavy rain of roses/hearts
    createHearts(100);
}

function createHearts(amount) {
    const container = document.querySelector('.hearts-container');
    for (let i = 0; i < amount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = Math.random() > 0.5 ? '🌹' : '💖'; // Roses and Hearts
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        container.appendChild(heart);
        
        // Remove heart after animation to keep DOM clean
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Start gentle background hearts
setInterval(() => createHearts(2), 500);
