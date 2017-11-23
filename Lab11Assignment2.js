

var AdjectiveArray = new Array("");
AdjectiveArray = ["Mad", "Confused", "Joyful", "Hungry", "Sad"];
var NounArray = new Array("");
NounArray = ["Chair", "Couch", "Table", "Computer", "Floor"];

function First(){
  var Ad = Math.round (Math.random()*4);
  var No = Math.round (Math.random()*4);

  document.getElementById('output').innerHTML += String(AdjectiveArray[Ad] +" "+ NounArray[No]) +"<br />";
}
