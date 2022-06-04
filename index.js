const display = document.getElementById('clock');
const audio = new Audio ('https://elements.envato.com/alarm-NBUK26X?utm_source=mixkit&utm_medium=referral&utm_campaign=elements_mixkit_cs_sfx_tag&_ga=2.162709820.1441480742.1654229984-1677857703.1654229984')
audio.loop = true;
let alarmTime = null;
let alarmTimeOut = null;

function updateTime(){
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes =formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    display.innerText =`${hour} : ${minutes} : ${seconds}`
}

function formatTime(time){
    if (time < 10){
        return '0' + time;
    }
    return time
}

function setAlarmTime(value){
    alarmTime = value;
    // console.timeLog(alarmTime)
}

function setAlarm(){
    if (alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > now){
            const timeOut = timeToAlarm.getTime() - current.getTime();
            alarmTimeOut = setTimeout(() => audio.play(), timeOut);
            alert ('Alarm set');
        }
    }
}

setInterval(updateTime, 1000);