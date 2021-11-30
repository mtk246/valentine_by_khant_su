const myDate = "2018-9-9";

//count days
const oldDate = new Date(myDate);
const newDate = new Date();

const dateDiff = Math.abs(newDate.getTime() - oldDate.getTime());
const days = Math.ceil(dateDiff / (1000 * 3600 * 24));

<<<<<<< HEAD:public/js/been_together.js
console.log(days);
$(".days").html(days + " Days");
=======
document.querySelector(".days").html(days + " Days");
>>>>>>> react:public/been_together.js

//count seconds

setInterval(() => {
  const sOldDate = new Date(myDate);
  const sNewDate = new Date();
  const secondDiff = (sNewDate.getTime() - sOldDate.getTime()) / 1000;
  const seconds = Math.ceil(secondDiff);
<<<<<<< HEAD:public/js/been_together.js
  document.querySelector(".second").innerHTML = seconds + " Seconds";
=======
  document.querySelector(".seconds").innerHTML = seconds + " Seconds";
>>>>>>> react:public/been_together.js
}, 1000);
