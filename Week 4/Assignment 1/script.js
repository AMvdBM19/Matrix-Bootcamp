// global variables
const timerEl = document.getElementById("timer");

const workLengthEl = document.getElementById("work-lenght");
const breakLengthEl = document.getElementById("break-lenght");

const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let minutes = parseInt(workLengthEl.textContent, 10);
let seconds = 0;

let isRunning = false;
let isWork = true;
let interval = null;

// counter

function setupCounter(minusId, plusId, valueId) {
    const minusBtn = document.getElementById(minusId);
    const plusBtn = document.getElementById(plusId);
    const valueEl = document.getElementById(valueId);

    minusBtn.addEventListener("click", function () {
        if (isRunning) return;

        let value = parseInt(valueEl.textContent, 10);
        if (value > 1) {
            valueEl.textContent = value - 1;

            if (valueId === "work-lenght") {
                minutes = value - 1;
                seconds = 0;
                updateTimer();
            }
        }
    });

    plusBtn.addEventListener("click", function () {
        if (isRunning) return;

        let value = parseInt(valueEl.textContent, 10);
        if (value < 60) {
            valueEl.textContent = value + 1;

            if (valueId === "work-lenght") {
                minutes = value + 1;
                seconds = 0;
                updateTimer();
            }
        }
    });
}

setupCounter("work-minus", "work-plus", "work-lenght");
setupCounter("break-minus", "break-plus", "break-lenght");

// timer

function updateTimer() {
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    timerEl.textContent = min + ":" + sec;
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;

    interval = setInterval(function () {
        if (seconds === 0) {
            if (minutes === 0) {
                switchMode();
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        updateTimer();
    }, 1000);
}

function switchMode() {
    if (isWork) {
        minutes = parseInt(breakLengthEl.textContent, 10);
        isWork = false;
    } else {
        minutes = parseInt(workLengthEl.textContent, 10);
        isWork = true;
    }

    seconds = 0;
    updateTimer();
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    isWork = true;

    minutes = parseInt(workLengthEl.textContent, 10);
    seconds = 0;

    updateTimer();
}

//button listener

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

//call function
updateTimer();
