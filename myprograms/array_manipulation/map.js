const users = [
  {name: 'Samir', age: 25},
  {name: 'Angela', age: 23},
  {name: 'Beatrice', age: 40}
];

//let newUser = users.map(u => u.name + " is " + u.age + " years old.");
let newUser = users.map(u => `${u.name} is ${u.age} years old.`);

//Samir is 25 years old.
console.log(newUser);
