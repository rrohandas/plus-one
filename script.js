let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let revealMe = document.querySelector('.reveal-me');

const container = document.querySelector('.fireworks')
const fireworks = new Fireworks.default(container)

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 50% chance of either gender
if (randomIntFromInterval(1,2) == 1) {
    // boy
    value = 45;
    revealText = "<h2 style=\"font-size:xx-large;color:rgb(34 211 238/var(--tw-text-opacity))\">a beautiful baby boy!</h2>"
} else {
    // girl
    value = 90;
    revealText = "<h2 style=\"font-size:xx-large;color:rgb(244 114 182/var(--tw-text-opacity))\">a beautiful baby girl!</h2>"
}

value = 45;
    revealText = "<h2 style=\"font-size:xx-large;color:rgb(34 211 238/var(--tw-text-opacity))\">a beautiful baby boy!</h2>"

function startFireworks() {
    revealMe.innerHTML = revealText;
    fireworks.start();
}

spinBtn.onclick = function() {
    newValue = randomIntFromInterval(6*90,10*90);
    wheel.style.transform = "rotate(" + newValue + "deg)";
    setTimeout(firstDelay, 5000);
    setTimeout(secondDelay, 10000);
    setTimeout(thirdDelay, 15000);
    setTimeout(fourthDelay, 20000);
    // after all delays, start fireworks
    setTimeout(startFireworks, 25000);
}

function firstDelay() {
    revealMe.innerHTML = "<h2 style=\"font-size:xx-large\">not yet...</h2>";
    newValue = randomIntFromInterval(16*90,20*90);
    wheel.style.transform = "rotate(" + newValue + "deg)";
}

function secondDelay() {
    revealMe.innerHTML = "<h2 style=\"font-size:xx-large\">still going...</h2>";
    newValue = randomIntFromInterval(26*90,30*90);
    wheel.style.transform = "rotate(" + newValue + "deg)";
}

function thirdDelay() {
    revealMe.innerHTML = "<h2 style=\"font-size:xx-large\">keeping up the suspense...</h2>";
    newValue = randomIntFromInterval(36*90,40*90);
    wheel.style.transform = "rotate(" + newValue + "deg)";
}

function fourthDelay() {
    revealMe.innerHTML = "<h2 style=\"font-size:xx-large\">are you ready for this?</h2>";
    newValue = randomIntFromInterval(96,100)*90 + value;
    wheel.style.transform = "rotate(" + newValue + "deg)";
}