// // Global variables
// const time_el = document.querySelector('.watch .time');
// const millisec_el = document.querySelector('.watch .milliseconds');
// const start_btn = document.getElementById('start');
// const pause_btn = document.getElementById('pause');
// const reset_btn = document.getElementById('reset');

// let totalMilliseconds = 0;
// let interval = null;

// //Event Listeners
// start_btn.addEventListener('click', start);
// pause_btn.addEventListener('click', pause);
// reset_btn.addEventListener('click', reset);

// // Update timer
// function timer() {

//     totalMilliseconds += 10;

//     // if (totalMilliseconds >= 1000) {
//     //     totalMilliseconds -= 1000; // Subtract 1000 milliseconds (1 second)
//     // }

//     // Formatting time
//     let hrs = Math.floor(totalMilliseconds / 3600000);
//     let mins = Math.floor((totalMilliseconds % 3600000) / 60000);
//     let secs = Math.floor((totalMilliseconds % 60000) / 1000);
//     let mill = totalMilliseconds % 1000;


//     if (hrs < 10) hrs = '0' + hrs;
//     if (mins < 10) mins = '0' + mins;
//     if (secs < 10) secs = '0' + secs;
//     if (mill < 10) mill = '0' + mill;

//     // hrs = hrs.toString().padStart(2, '0');
//     // mins = mins.toString().padStart(2, '0');
//     // secs = secs.toString().padStart(2, '0');
//     // mill = mill.toString().padStart(3, '0');

//     time_el.innerText = `${hrs}:${mins}:${secs}`;
//     millisec_el.innerText = `.${mill}`;

// }

// function start() {
//     if (interval) {
//         return
//     }

//     interval = setInterval(timer, 10);
// }

// function pause() {
//     clearInterval(interval);
//     interval = null;
// }

// function reset() {
//     pause();
//     totalMilliseconds = 0;
//     time_el.innerText = '00:00:00';
//     millisec_el.innerText = '.000';
// }
// timer();


// Global variables
const hours_el = document.getElementById('hours');
const minutes_el = document.getElementById('minutes');
const seconds_el = document.getElementById('seconds');
const milliseconds_el = document.querySelector('.watch .milliseconds');
const start_btn = document.getElementById('start');
const pause_btn = document.getElementById('pause');
const reset_btn = document.getElementById('reset');

let totalMilliseconds = 0;
let interval = null;

// Event Listeners
start_btn.addEventListener('click', start);
pause_btn.addEventListener('click', pause);
reset_btn.addEventListener('click', reset);

// Update timer
function timer() {
    totalMilliseconds += 10;

    // Calculate hours, minutes, seconds, and milliseconds
    let hours = Math.floor(totalMilliseconds / 3600000);
    let minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
    let seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    let milliseconds = totalMilliseconds % 1000;

    // Format with leading zeros
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');
    let formattedMilliseconds = milliseconds.toString().padStart(3, '0');

    // Update the displayed time and milliseconds
    hours_el.innerText = formattedHours;
    minutes_el.innerText = formattedMinutes;
    seconds_el.innerText = formattedSeconds;
    milliseconds_el.innerText = `.${formattedMilliseconds}`;
}

function start() {
    if (interval) {
        return;
    }

    interval = setInterval(timer, 10);
}

function pause() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    pause();
    totalMilliseconds = 0;
    hours_el.innerText = '00';
    minutes_el.innerText = '00';
    seconds_el.innerText = '00';
    milliseconds_el.innerText = '.000';
}

timer();
