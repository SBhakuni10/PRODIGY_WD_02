let timerDisplay=document.getElementById('timer-display');
let startBtn=document.getElementById('start');
let stopBtn=document.getElementById('stop');
let resetBtn=document.getElementById('reset');
let lapBtn=document.getElementById('lap');
let laps=document.getElementById('laps');

let msecs= 0;
let secs=0;
let mins=0;
let lapCounter=0;
let running=false;


startBtn.addEventListener('click',()=>{
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
})
stopBtn.addEventListener('click',()=>{
    clearInterval(timerId);
})
resetBtn.addEventListener('click',()=>{
        clearInterval(timerId);
    timerDisplay.innerHTML=`00:00:00`;
    msecs=secs=mins=0;
    laps.innerHTML='';
})
lapBtn.addEventListener('click',()=>{
    if(running==false){
        lapBtn++;
        const lapTime=document.createElement("li")
        lapTime.innerHTML=timerDisplay.innerHTML;
        laps.appendChild(lapTime);   
    }
 })
 

let timerId=null;
function startTimer(){
    msecs++;
    if(msecs===100){
        msecs=0;
        secs++;
        if(secs===60){
            secs=0;
            mins++;
        }
    }
   
    let msecStrings=msecs<10? `0${msecs}`: msecs;
    let secsStrings=secs<10? `0${secs}`: secs;
    let minsStrings=mins<10? `0${mins}`: mins;

    timerDisplay.innerHTML=`${minsStrings}:${secsStrings}:${msecStrings}`;


}

