//The starting time
var start = new Date();
var startMilli = start.getTime();

function STOPTIME(){

//The time when we press the buttom
  var end = new Date();
  var endMilli = end.getTime();

//Subtract end time from start time
  var diffMilli = endMilli - startMilli;

//Converted the differnece to seconds
  var diffSec = diffMilli/1000;

//Alert the user with a popoup
  alert ("The number of seconds is: " + diffSec);

}
