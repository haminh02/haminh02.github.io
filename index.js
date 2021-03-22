console.log("Hello World");
const week=604800000;
const startSaturday=217800000;
const timeOfContest=3*60*60*1000;
var date = new Date();

var currentTime=date.getTime();

date=new Date (currentTime-(currentTime-startSaturday)%week+week);

var dataTime = `${date.getFullYear()}-${date.getMonth()+1>=10? date.getMonth()+1:'0'+(date.getMonth()+1)}-${date.getDate()>=10? date.getDate():'0'+(date.getDate())}`;

document.querySelector('.day1').innerHTML = dataTime+ '<br>(Thứ Bảy)';

document.querySelector('.time-start1').innerHTML = `${dataTime} ${date.toLocaleTimeString()} UTC${date.toString().substr(28,3)}<br>(${date.getTime()})`;
date=new Date(date.getTime()+timeOfContest);
document.querySelector('.time-finish1').innerHTML = `${dataTime} ${date.toLocaleTimeString()} UTC${date.toString().substr(28, 3)}<br>(${date.getTime()})`;

date.setDate(date.getDate()+7);
dataTime = `${date.getFullYear()}-${date.getMonth()+1>=10? date.getMonth()+1:'0'+(date.getMonth()+1)}-${date.getDate()>=10? date.getDate():'0'+(date.getDate())}`;

document.querySelector('.day2').innerHTML = dataTime+'<br>(Thứ Bảy)';

document.querySelector('.time-finish2').innerHTML = `${dataTime} ${date.toLocaleTimeString()} UTC${date.toString().substr(28,3)}<br>(${date.getTime()})`;
date=new Date(date.getTime()-timeOfContest);
document.querySelector('.time-start2').innerHTML = `${dataTime} ${date.toLocaleTimeString()} UTC${date.toString().substr(28,3)}<br>(${date.getTime()})`;
