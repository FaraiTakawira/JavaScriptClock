
// l have to retype this with my own lines of codes

let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let ms = document.querySelector('#sc');





setInterval(() =>{
let day =  new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let sc =  day.getSeconds() * 60;

hr.style.transform =`rotateZ({$hh+(mm/12)}deg)`;
mn.style.transform =`rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${sc}deg)`;





let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let am = h >= 12 ? "PM" : "AM";
//converting 24 hr to 12 hr clock_t
if( h > 12){
  h  = h - 12;
}


//add a zero before single digit numbers
h = (h < 10) ? "0" + h : h
m = (h < 10) ? "0" + m : m
s = (h < 10) ? "0" + s : s

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;
 
});

console.log(hours, minutes, seconds);


//digital clock




