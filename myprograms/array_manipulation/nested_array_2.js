const users = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];

    // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];

let arr = users
  .map(u => u.favoriteBooks)
  .reduce((acc, cur) => [...acc, ...cur], [])
  .map(u => u.title);

  /* The same
  let arr = users
  .map(u => u.favoriteBooks.map(u => u.title))
  .reduce((acc, cur) => [...acc, ...cur], [])
  ;
  */

console.log(arr);
