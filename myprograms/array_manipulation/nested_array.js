const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
];


let arr = movies.reduce((acc, cur) => [...acc, ...cur], []);
console.log(arr);
