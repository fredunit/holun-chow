function time(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

hour = updateTime(hour);
minute = updateTime(minute);
second = updateTime(second);
document.getElementsById("clock").innerText = hour + ":" + minute + ":" + second;

let display = setTimeout(function () {
 time() }, 1000);
}

function updateTime(value) {
  if (value < 10) {
    return "0" + value;
} else {
  return value;
}
}

time();

