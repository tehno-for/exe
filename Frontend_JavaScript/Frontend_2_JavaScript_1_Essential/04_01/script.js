// Regular function, called explicitly by name:
/*
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())
*/

function multiply(a,b){
  result = a * b;
  console.log(result);
  return result;
}
multiply(5,5);
alert(multiply(3,3))
