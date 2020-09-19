function time(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

hour = (hour < 10)? "0" + hour : hour;
minute = (minute < 10)? "0" + minute : minute;
second = (second < 10)? "0" + second : second;

let display = hour + ":" + minute + ":" + second;
document.getElementById("clock").innerText = display;
document.getElementById("clock").textContent = display;
}

time();
setInterval(time, 1000);

