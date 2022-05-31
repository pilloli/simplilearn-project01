function date(){
document.getElementById('time')

var myDate = new Date();
var myDay = myDate.getDay();
// Array of days.
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dd = myDate.getDate();
var mm = myDate.getMonth()+1;
var yyyy = myDate.getFullYear();
if(dd<10)
{dd='0'+dd;}
if(mm<10)
{mm='0'+mm;}
myDate = mm+'/'+dd+'/'+yyyy;

document.getElementById('time').textContent = ("Today is: " +weekday[myDay]+ ", " + myDate);

}