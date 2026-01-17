// Dom Element
const hours = document.querySelector('.hours');
const munites = document.querySelector('.munites');
const seconds = document.querySelector('.second');
const minSeconds = document.querySelector('.minsec');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const clear = document.querySelector('.clear');

// timer varient
const timer = {
    hour: 0,
    minute: 0,
    second: 0,
    milli: 0,
    interval: null
}

// time Start

function randerTime(){
    const MILL_LIMIT = 100;
    const SEC_LIMIT = 60;
    const MIN_LIMIT = 60;
    const INTERVAL = 10

        if(timer.interval)return;

        timer.interval = setInterval(() => {
            timer.milli++

            if(timer.milli === MILL_LIMIT){
                timer.milli = 0;
                timer.second++
            }

            if(timer.second === SEC_LIMIT){
                timer.second = 0;
                timer.minute++;
                
            }

            if(timer.minute === MIN_LIMIT){
                timer.minute = 0;
                timer.hour++
            }

        uiUpdate()

        }, INTERVAL)

}

// the time variable number is 2 digit 
function twoNumb(time){
    return time < 10 ? '0' + time : time
}

// ui time update
function uiUpdate(){

    seconds.textContent = twoNumb(timer.second)
    munites.textContent = twoNumb(timer.minute)
    hours.textContent = twoNumb(timer.hour)
    minSeconds.textContent = twoNumb(timer.milli)

}

// To stop time while it is running
function stopTimer(){
    clearInterval(timer.interval)
    timer.interval = null

}

//  To clear time while it is running
function clearTimer(){
    stopTimer()
    timer.hour = 0
    timer.minute = 0
    timer.second = 0
    timer.milli = 0
    seconds.textContent = '00'
    minSeconds.textContent = '00' 
    hours.textContent = '00'
    munites.textContent = '00'

}

// button click render
start.addEventListener('click', randerTime)
stop.addEventListener('click', stopTimer)
clear.addEventListener('click', clearTimer)