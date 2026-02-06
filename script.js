const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.yes-btn');
const questionText = document.getElementById('question');
const imageArea = document.querySelector('.image-area');
const questionArea = document.querySelector('.question-area');
const successMessage = document.getElementById('success-message');
const header = document.querySelector('.header'); // NEW: Select the header

// Jokes and references
const texts = [
    "Are you sure? 🤨",
    "Don't be a bad bear! 🐻",
    "I'll set your fielding! 😤",
    "Biryani treat from my side?!",
    "Back to Nanoship then? 🚢",
    "My Aura will go minus! 📉",
    "Don't make me call Aunty! 📞",
    "I'll cry in the corner! 😭",
    "Pleaseee Kitty? 🥺",
    "You're breaking my heart 💔",
    "Okay, I'm hiding! 🙈"
];

let clickCount = 0;
let yesSize = 1;
let noSize = 1;

function handleNo() {
    clickCount++;
    if (clickCount < texts.length) {
        noBtn.innerText = texts[clickCount];
    } else {
        noBtn.innerText = "Just click Yes! 😤";
    }

    yesSize += 0.5; 
    yesBtn.style.transform = `scale(${yesSize})`;
    
    noSize -= 0.10; 
    if (noSize < 0.2) noSize = 0.2; 
    noBtn.style.transform = `scale(${noSize})`;
}

function acceptLove() {
    imageArea.classList.add('hidden');
    questionArea.classList.add('hidden');
    header.classList.add('hidden'); // NEW: Hides the "Hey Apoorba..." text
    successMessage.classList.remove('hidden');
    
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

setInterval(() => createHearts(2), 300);
