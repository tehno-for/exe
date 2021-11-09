const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 9.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

    // Result: { name: 'paper towels', price: 6.99 }

const tillTen = products
  .filter(p => p.price < 10)
  .reduce((acc, cur) => {
    if(acc.price > cur.price){
      return acc;
    }
    return cur;

  },0);

console.log(tillTen);
