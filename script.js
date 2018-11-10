
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;  // stops the function from running
    audio.currentTime = 0;  // revind audio to the start (makes multipres pssible)
    audio.play();
    key.classList.add('playing');
}

function removeTransiton(e) {
    if (e.propertyName !== 'transform') return;    // skip it if it is not a transition
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransiton));

window.addEventListener('keydown', playSound);

