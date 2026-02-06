const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.yes-btn');
const imageArea = document.querySelector('.image-area');
const questionArea = document.querySelector('.question-area');
const successMessage = document.getElementById('success-message');

// Personal jokes from your chats
const messages = [
    "No",
    "Are you sure? 🤨",
    "Don't be a bad bear! 🐻",
    "I'll set your fielding! 😤",
    "Think about the Yellow Dress! 💛",
    "Back to Nanoship then? 🚢",
    "My Aura will go minus! 📉",
    "Don't make me call Aunty! 📞",
    "I'll cry in the corner! 😭",
    "Pleaseee Kitty? 🥺",
    "You're breaking my heart 💔",
    "Okay, I'm hiding! 🙈"
];

let messageIndex = 0;
let yesSize = 1; // Initial font size multiplier
let noSize = 1;  // Initial font size multiplier

function handleNo() {
    // 1. Change the text of the No button
    messageIndex++;
    // If we run out of messages, just keep showing the last one
    if (messageIndex < messages.length) {
        noBtn.innerText = messages[messageIndex];
    } else {
        noBtn.innerText = "Just click Yes! 😤";
    }

    // 2. Make Yes button BIGGER
    yesSize += 0.5; // Increases size significantly per click
    yesBtn.style.transform = `scale(${yesSize})`;
    
    // 3. Make No button SMALLER
    noSize -= 0.10; // Decreases size
    // Prevent it from disappearing completely so she can still *try* to click it
    if (noSize < 0.2) noSize = 0.2; 
    noBtn.style.transform = `scale(${noSize})`;

    // Optional: Add a little shake animation to the No button
    noBtn.animate([
        { transform: `scale(${noSize}) translateX(0)` },
        { transform: `scale(${noSize}) translateX(10px)` },
        { transform: `scale(${noSize}) translateX(-10px)` },
        { transform: `scale(${noSize}) translateX(0)` }
    ], {
        duration: 200,
        iterations: 1
    });
}

function acceptLove() {
    imageArea.classList.add('hidden');
    questionArea.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Launch confetti/hearts
    createHearts(100);
}

function createHearts(amount) {
    const container = document.querySelector('.hearts-container');
    for (let i = 0; i < amount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = Math.random() > 0.5 ? '🌹' : '💖'; 
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Background animation
setInterval(() => createHearts(2), 300);
