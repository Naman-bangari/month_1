
const typingAnimationElement = document.getElementById('typing-animation');
const typingTexts = [
    'Coder  ',
    'ML enthusiast  ',
    'Learner   ',
];


function playTypingAnimation(text) {
    typingAnimationElement.textContent = ''; 
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingAnimationElement.textContent += text[i];
        }, i * 200);
    }
    setTimeout(() => {
        playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
    }, text.length * 200);
}
playTypingAnimation(typingTexts[0]);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const scrollDuration = 1000; 
        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollProgress = Math.min(timeElapsed / scrollDuration, 1);
            const easeFunction = easeOutCubic(scrollProgress);
            window.scrollTo(0, startPosition + distance * easeFunction);
            if (timeElapsed < scrollDuration) requestAnimationFrame(animation);
        }

        function easeOutCubic(t) {
            return (t = t - 1) * t * t + 1;
        }

        requestAnimationFrame(animation);
    });
});


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
link.addEventListener('click', function() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    this.classList.add('active');
});
});
