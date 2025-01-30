let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let time = document.querySelector(".timer");

let interval;
let totalTime = 1500;

function updateTimer(){
    let min = Math.floor(totalTime/60);
    let sec = totalTime % 60;
    let finalTime = `${min.toString().padStart(2,"0")} : ${sec.toString().padStart(2,"0")}`;
    time.innerHTML = finalTime;
}
function startTimer(){

  interval = setInterval(()=>{
   
    totalTime--
    updateTimer();
    if(totalTime === 0){
        clearInterval(interval);
        alert("Time Out!!!");
        totalTime = 1500;
    }

  },1000);

}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    totalTime = 1500;
    updateTimer();
}

startBtn.addEventListener("click",startTimer);
stopBtn.addEventListener("click",stopTimer);
resetBtn.addEventListener("click",resetTimer);