



// Today's Day and date information stored into variables

var events;    // event log global object created


// Date today is:
var dd = date.getDate();             // day
var MM = date.getMonth();              // month
var yyyy = date.getFullYear();          // year
var todayDate=(MM + 1) + "/" + dd + "/" + yyyy; // today's date


// Get the day of the week 
// A date will be taken from the weekdays array:
var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday" ]; //weekday's days
const d = new Date();
// let day = d.getDay();  //for one day
let day = weekdays[d.getDay()]; // for each from the array

console.log(day);
//console.log('Today is ' + day + todayDate);
// $('#currentDay').text(moment().format('dddd, MMMM Do'));



