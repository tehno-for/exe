function executeCallback( callback ) {
  callback();
}

executeCallback(() => {
    console.log('Hello');
});
