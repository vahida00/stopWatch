var hrs=document.getElementById('hours');
var min=document.getElementById('minutes');
var sec=document.getElementById('seconds');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var displayOnStop=document.getElementsByClassName('resetTime');
var timer;
var secondCounter=0;
let hours;
let minutes;
let seconds;
let hourContext;
let minuteContext;
let secondContext;


start.addEventListener('click',()=>{
    start.disabled=true;
    timer=setInterval(displayTimer,1000);
    console.log('time started');
})
function displayTimer(){
    

    hours=Math.floor(secondCounter/3600);
    minutes=Math.floor((secondCounter%3600)/60);
    seconds=Math.floor(secondCounter%60);

    // Display timing intervals in a traditional way
    hourContext= hours<10 ?'0'+ hours : hours;
    minuteContext= minutes<10 ?'0'+ minutes : minutes;
    secondContext= seconds<10 ?'0'+ seconds : seconds;

    hrs.innerHTML=hourContext;
    min.innerHTML=': '+minuteContext;
    sec.innerHTML=': '+secondContext;
    secondCounter++;
}
stop.addEventListener('click',()=>{
    displayOnStop.innerHTML=hourContext +' : '+ minuteContext+' : '+secondContext;
    displayOnStop.innerHTML='vahida';
    start.disabled=false;
    clearInterval(timer);
    console.log('time stopped');
})
reset.addEventListener('click',()=>{
    start.disabled=false;
    hrs.innerHTML=0+'0';
    min.innerHTML=': '+0+'0';
    sec.innerHTML=': '+0+'0';
    clearInterval(timer);
    console.log('time reseted');
})

