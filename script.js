let seccond = 0;
let minute = 0;
let hour = 0;
let day = new Date();

setInterval(function () {
  let date = new Date();
  seccond = date.getSeconds() * 6;
  minute = date.getMinutes() * 6;
  hour = date.getHours() * 30 + Math.round(minute / 12);
  document.getElementById("seccond-hand").style.transform =
    "rotate(" + seccond + "deg)";
  document.getElementById("minute-hand").style.transform =
    "rotate(" + minute + "deg)";
  document.getElementById("hour-hand").style.transform =
    "rotate(" + hour + "deg)";
}),
  1000;
