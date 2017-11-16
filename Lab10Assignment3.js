function add(){

//Get the value from the two input type texts
  var num1 = documment.getElementById('num1').value;
  var num2 = documment.getElementById('num2').value;

//Add the two numbers together
  var sum = Number(num1) + Number (num2);


//Out the value to the screen
  document.getElementById('output'). innerHTML = sum
  
}
