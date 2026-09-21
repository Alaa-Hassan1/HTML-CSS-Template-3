// Start Events
let daysEl = document.querySelector(".days");
let hoursEl = document.querySelector(".hours");
let minutesEl = document.querySelector(".minutes");
let secondsEl = document.querySelector(".seconds");

let endYearTime = new Date("Dec 31, 2026, 23:59:59").getTime();

let counter = setInterval(() => {
    let now = new Date().getTime();
    let diffrence = endYearTime - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    
    let d = Math.floor(diffrence / days);
    let h = Math.floor((diffrence % days) / hours);
    let m = Math.floor((diffrence % hours) / minutes);
    let s = Math.floor((diffrence % minutes) / seconds);

    daysEl.innerHTML = d < 10 ? `0${d}` : d;
    hoursEl.innerHTML = h < 10 ? `0${h}` : h;
    minutesEl.innerHTML = m < 10 ? `0${m}` : m;
    secondsEl.innerHTML = s < 10 ? `0${s}` : s;

    if (diffrence < 0) {
        clearInterval(counter);
    }
}, 1000);
// End Events

// Start Skills
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", function(){
    if (window.scrollY >= section.offsetTop) {
        spans.forEach(span => {
            span.style.width = span.dataset.width;
        })
    }
});
// End Skills

// start Awesome Stats
let stats = document.querySelector("#stats");
let number = document.querySelectorAll(".box .number");
let started = false;

window.addEventListener("scroll", function() {
    if (window.scrollY >= stats.offsetTop) {
        if(!started) {
            number.forEach((num) => startCount(num));
        }
        started = true;
    }
});

function startCount(num) {
    let goal = num.dataset.goal;
    let counter = setInterval(function(){
        num.textContent++;
        if(num.textContent == num.dataset.goal) {
            clearInterval(counter);
        }
    }, 2000 / goal); 
}

// End Awesome Stats
