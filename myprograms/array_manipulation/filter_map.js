const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

    // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const names = userNames
  .filter(n => n[0] ==='S')
  .map(n => ({name:n}));

console.log(names);
