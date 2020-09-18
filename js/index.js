function clock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
}

function clock(){
    hour = updateTime(hour);
    minute = updateTime(minute);
    second = updateTime(second);
}

function updateTime(value) {
    if (value < 10) {
      return "0" + value;
    }
    else {
      return value;
    }
  }

  document.getElementById("clock").innerHTML = hour + " : " + minute + " : " + second;
 
  function clock() {
      let time = setTimeout(function(){ clock() }, 1000);
  }

clock();

