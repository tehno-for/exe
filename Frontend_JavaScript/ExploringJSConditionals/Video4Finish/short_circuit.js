function isAdult( age ) {
  return age && age >= 18;
}

//console.log(isAdult(33));

function countToFive(start = 1) {
  for(var i = start; i <= 5; i +=1) {
    console.log(i);
  }
}

//countToFive(0);

function greet(name) {
  name && console.log('Hi, ' + name + '!');
}

greet("Sam");

