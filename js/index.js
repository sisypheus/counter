let clicks = document.getElementById('clicks');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let restore = document.getElementById('reset');

let nbclicks = 0;

clicks.innerHTML = nbclicks;

restore.addEventListener('click', () => {
    nbclicks = 0;
    clicks.innerHTML = nbclicks;
    color(nbclicks, clicks);
});

decrease.addEventListener('click', () => {
    nbclicks--;
    clicks.innerHTML = nbclicks;
    color(nbclicks, clicks);
});

increase.addEventListener('click', () => {
    nbclicks++;
    clicks.innerHTML = nbclicks;
    color(nbclicks, clicks);
});

function color(nbclicks, element) {
    if (nbclicks < 0)
        element.style.color = 'red';
    else if (nbclicks > 0)
        element.style.color = 'green';
    else
        element.style.color = 'black';
}