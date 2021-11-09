function sayHello() {
    console.log('Hello');
}

function exe(callback){
  callback();
}

exe(sayHello);
