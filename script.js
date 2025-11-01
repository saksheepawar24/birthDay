// Wait for the page to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    const heartContainer = document.querySelector('.heart-container');

    // Function to create a single heart
    function createHeart() {
        if (!heartContainer) return; // Stop if container not found

        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Array of neon colors and heart emojis
        const items = [
            { color: 'var(--neon-pink)', char: '❤️' },
            { color: 'var(--neon-blue)', char: '💙' },
            { color: 'var(--neon-green)', char: '💚' },
            { color: 'var(--neon-orange)', char: '🧡' },
            { color: 'var(--neon-yellow)', char: '💛' },
            { color: 'var(--neon-purple)', char: '💜' },
            { color: 'var(--neon-red)', char: '❤️' }
        ];
        
        // Pick a random item from the array
        const item = items[Math.floor(Math.random() * items.length)];
        
        heart.innerText = item.char;
        heart.style.color = item.color;
        // Add a neon glow to the heart emoji
        heart.style.textShadow = `0 0 10px ${item.color}, 0 0 20px ${item.color}`;
        
        // Random horizontal start position
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration (between 7 and 12 seconds)
        const duration = Math.random() * 5 + 7;
        heart.style.animationDuration = duration + 's';
        
        // Random size (between 1rem and 2rem)
        heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';

        // Random horizontal drift (from -100px to +100px)
        const drift = (Math.random() - 0.5) * 200;
        // Set the --drift CSS variable for this specific heart
        heart.style.setProperty('--drift', drift);

        // Add the heart to the page
        heartContainer.appendChild(heart);

        // Remove the heart from the page after its animation finishes
        // (duration is in seconds, so multiply by 1000 for milliseconds)
        setTimeout(() => {
            heart.remove();
        }, duration * 1000); 
    }

    // Create a new heart every 300 milliseconds (about 3 per second)
    setInterval(createHeart, 300);
});