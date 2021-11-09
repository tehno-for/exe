const tmp = false;

const breakfastPromise = new Promise( (resolve, recect) => {
  setTimeout(() => {
    if(tmp){
      resolve('You order is ready, common!!!');
    } else {
      recect( Error('You order cannot be made'));
    }

  }, 3000);
} );

//console.log(breakfastProm);
console.log('Start!!');
breakfastPromise
  .then(val => console.log(val))
  .catch(err => console.log(err));
