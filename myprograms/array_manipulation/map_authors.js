const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below

fullAuthorNames = authors.map(a => `${a.firstName} ${a.lastName}`);

console.log(fullAuthorNames);
