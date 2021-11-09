function sum(){
  let basesum = Array.from(arguments).filter(a=> !isNaN(Number(a)));
  return basesum.reduce((a,c)=>a+c);
}

console.log(sum(5,5,5));
console.log(sum(5,66,60,80,660));
console.log(sum(7,7));
console.log(sum(7,"leg","tp"));
