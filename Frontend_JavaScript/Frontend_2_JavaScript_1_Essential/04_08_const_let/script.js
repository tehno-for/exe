const MYCONSTANT = 5;
console.log(MYCONSTANT);

function logScope(){
  let localVar = 2;

  if(localVar){
    let localVar = "I am diferent!";
    console.log("I am nested:", localVar);
    }
  console.log("The same one:", localVar);
}
logScope();
