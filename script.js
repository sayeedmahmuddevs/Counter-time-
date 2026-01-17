// Dom Element
const hours = document.querySelector('.hours');
const munites = document.querySelector('.munites');
const seconds = document.querySelector('.second');
const minSeconds = document.querySelector('.minsec');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const clear = document.querySelector('.clear');

// timer counter
    let hour = 0;
    let munite = 0;
    let second = 0;
    let minsnd = 0
    let interval;

// time Start

function startTimer(){
    if(interval) return;
    interval = setInterval(()=>{
        minsnd++
        if(minsnd===99){
            minsnd = 0
            second++
            if(second===60){
                second = 0
                munite++
                if(munite===60){
                    munite = 0;
                    hour++
                }
            }
        }
        seconds.textContent = second<10 ? '0'+second : second
        minSeconds.textContent = minsnd<10 ? '0'+minsnd : minsnd;
        hours.textContent = hour<10 ? '0'+hour : hour;
        munites.textContent = munite<10 ? '0'+munite : munite;

    },10)
    
}
      
function stopTimer(){
    clearInterval(interval)
    interval = null

}

function clearTimer(){
    stopTimer()
    hour = 0
    munite = 0
    second = 0
    minsnd = 0
    seconds.textContent = '00'
    minSeconds.textContent = '00' 
    hours.textContent = '00'
    munites.textContent = '00'

}


start.addEventListener('click', startTimer)
stop.addEventListener('click', stopTimer)
clear.addEventListener('click', clearTimer)