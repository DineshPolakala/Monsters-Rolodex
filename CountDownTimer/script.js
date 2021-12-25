const newYears = '01 jul 2022'
const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minutesel = document.getElementById('minutes');
const secondsel = document.getElementById('seconds');
function countDown(){
    const newYearsDate  = new Date(newYears);
    const cur_date = new Date();
    
    const total_seconds = (newYearsDate - cur_date) / 1000;
    const days  = Math.floor(total_seconds/(3600*24));
    const hours = Math.floor(total_seconds/3600) %24;
    const minutes = (Math.floor(total_seconds/60) %60);
    const seconds = Math.floor(total_seconds)%60;
    // console.log(days, hours, minutes, seconds);
    daysel.innerHTML = formatTime(days);
    hoursel.innerHTML = formatTime(hours);
    minutesel.innerHTML = formatTime(minutes);
    secondsel.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return (time < 10) ? ("0"+time) : (time);
}
// countDown();
setInterval(countDown, 1000)
