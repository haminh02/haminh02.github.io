var dayOfWeek = 6;//saturday

var date = new Date();

date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
date.setHours(19);
date.setMinutes(30);
date.setSeconds(0);
date.setMilliseconds(0);
var dataTime = `${date.getFullYear()}-${date.getMonth()+1>=10? date.getMonth()+1:'0'+(date.getMonth()+1)}-${date.getDate()>=10? date.getDate():'0'+(date.getDate())}`;

document.querySelector('.day1').innerHTML = dataTime+ '<br>(Thứ Bảy)';

document.querySelector('.time-start1').innerHTML = `${dataTime} ${date.toLocaleTimeString()} UTC+7 (${date.getTime()})`;

date.setHours(22);
document.querySelector('.time-finish1').innerHTML = `${dataTime} ${date.toLocaleTimeString()} UTC+7 (${date.getTime()})`;

date.setDate(date.getDate()+7);
//date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
dataTime = `${date.getFullYear()}-${date.getMonth()+1>=10? date.getMonth()+1:'0'+(date.getMonth()+1)}-${date.getDate()>=10? date.getDate():'0'+(date.getDate())}`;
date.setHours(19);

document.querySelector('.day2').innerHTML = dataTime+'<br>(Thứ Bảy)';

document.querySelector('.time-start2').innerHTML = `${dataTime} ${date.toLocaleTimeString()} UTC+7 (${date.getTime()})`;

date.setHours(22);
document.querySelector('.time-finish2').innerHTML = `${dataTime} ${date.toLocaleTimeString()} UTC+7 (${date.getTime()})`;